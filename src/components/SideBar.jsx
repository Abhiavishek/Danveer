import React from 'react';
import { Link } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import { FcDonate } from 'react-icons/fc';
import { MdVerified } from 'react-icons/md';
import { LiaCashRegisterSolid } from 'react-icons/lia';
import { GrDocumentVerified } from 'react-icons/gr';

const SidebarLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center h-16 px-4 hover:bg-gray-200">
    {icon && React.cloneElement(icon, { className: 'h-7 w-11' })}
    <p className="text-left w-[90%] font-medium">{text}</p>
  </Link>
);

const Sidebar = () => {
  return (
    <div className="h-[90vh] w-[20vw] bg-gray-100 relative flex flex-col justify-center">
      <SidebarLink to="/dashboard/loginhelper" icon={<RiLoginCircleFill />} text="Login as Helper" />
      <SidebarLink to="/dashboard/registerdonar" icon={<GiArchiveRegister />} text="Register and Donate" />
      <SidebarLink to="" icon={<FcDonate />} text="Donate Money" />
      <SidebarLink to="" icon={<MdVerified />} text="Verified Donor" />
      <SidebarLink to="" icon={<LiaCashRegisterSolid />} text="Register as Recipient" />
      <SidebarLink to="" icon={<GrDocumentVerified />} text="Verified Recipient" />
    </div>
  );
};

export default Sidebar;
