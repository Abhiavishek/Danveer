package org.jsp.Danveer.service;

import org.jsp.Danveer.dto.ImageData;
import org.jsp.Danveer.repository.ImageDataRepo;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
@Service
public class ImageDataServiceImpl implements ImageDataService {
	
	private ImageDataRepo imagedataRepository;
	

	public ImageDataServiceImpl(ImageDataRepo imagedataRepository) {
		this.imagedataRepository = imagedataRepository;
	}

	@Override
	public ImageData saveImage(MultipartFile file) throws Exception {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if(fileName.contains("..")) {
				throw new Exception("Filename contains invalid path sequence "+ fileName);
			}
			ImageData imagedata = new ImageData(fileName, file.getContentType(),file.getBytes());
			return imagedataRepository.save(imagedata);
		}
		catch(Exception e) {
			throw new Exception("Could not save file: "+ fileName);
		}
	}

	@Override
	public ImageData getImage(String fileId) throws Exception {
		return imagedataRepository.findById(fileId).orElseThrow(()-> new Exception("File not found with Id: "+ fileId));
	}

}
