import React from "react";
import { TbMathGreater } from "react-icons/tb";
import Teamgoals from "../../../assets/images/team/teamgoals.svg";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Team = () => {
  return (
    <div className="overflow-x-hidden py-16 px-6 md:px-16 lg:px-36 bg-[right_bottom] md:bg-[right_center]">
      <div className="container">
        <h1 className="text-5xl text-center font-bold text-gray-800 my-8" data-aos="fade-up" data-aos-duration="600">
          Our Team Members
        </h1>
        <div className="bg-slate-100 py-2 px-4 ring-1 ring-gray-300 w-[max-content] rounded-xl justify-center flex items-center mx-auto">
          <h1 className="text-black justify-center flex items-center">
            <span className="text-[#afafaf]">CodeCraftor</span>{" "}
            <TbMathGreater className="mx-2" /> Our Team Members
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={Teamgoals}
            className="w-[60%] md:w-[40%]"
          />
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:text-xl text-[#173282]"
          >
            At CodeCraftor it, we are a versatile team of creative designers,
            skilled Ui/Ux Design, Logo And Brand Identity Design, Marketing
            Design, and savvy marketing strategists. Together, we transform
            ideas into captivating digital experiences that drive business
            growth and make your brand shine.
          </p>
        </div>
        {/* <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="">
            <img
              src={profile}
              className="w-[300px] rounded-md ring-[#ccc] ring-1"
            />
            <div className="p-3 bg-white w-[200px] rounded-se-lg rounded-es-lg relative bottom-12">
              <p className="text-xl">Abdullah Al Nirob</p>
              <p className="text-gray-400">Web Developer</p>
            </div>
          </div>
        </div> */}
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800 rounded-md">
          <div className="p-4 mx-auto space-y-16 sm:p-10">
            <div className="space-y-4">
              <h3
                className="text-2xl font-bold leading-none sm:text-5xl"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Meet our team
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                className="max-w-2xl dark:text-gray-600"
              >
                At a assumenda quas cum earum ut itaque commodi saepe rem
                aspernatur quam natus quis nihil quod, hic explicabo doloribus
                magnam neque, exercitationem eius sunt!
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover ring-1 ring-[#ccc] h-56 mx-auto mb-4 bg-center rounded-sm"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/435297943_1209088920068171_3490700636219041430_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNuTMKKJylVBCKYXC2rakv13nDQY5SK1DXecNBjlIrUF3YMG31yZfyGHgezmjaYssOTFXREAer9IHdZOuNxneP&_nc_ohc=akNx6qTT0OsQ7kNvgF475GS&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AJQMclkBqFeeM83dnPmlrK_&oh=00_AYDsG7C9a3RBbKCPZ5k4DN6tI2z4gWZnzoTD2UfS6xBWxw&oe=67032C1A"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Arafat Islam</h4>
                  <p className="text-sm dark:text-gray-600">CEO CodeCraftor</p>
                  <div className="flex mt-2 space-x-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="GitHub"
                      className="dark:text-gray-600"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
