package org.jsp.Danveer.service;

import org.jsp.Danveer.dto.ImageData;
import org.springframework.web.multipart.MultipartFile;

public interface ImageDataService {

	ImageData saveImage(MultipartFile file) throws Exception;
	ImageData getImage(String fileId) throws Exception;
}
