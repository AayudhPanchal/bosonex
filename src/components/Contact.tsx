"use client";
import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

export default function ContactSection() {
  const [value, setValue] = useState("");

  return (
    <>
      <hr className="opacity-65 md:mb-0 mb-5" />
      <div className="md:h-20" id="Contact"></div>
      <div className="flex flex-col md:gap-8 gap-4 justify-center items-center md:pb-32">
        <div className="main_head md:text-5xl text-2xl font-semibold">
          Contact Us.
        </div>
        <div className="desc md:text-xl md:px-0 px-12 text-center">
          Contact Us for any queries / recommendations.
        </div>

        <div className="container main flex flex-wrap justify-center gap-7">
          <div className="form border-1 border-[#A1A1A1] bg-[#0A0A0A] rounded-xl md:py-6 md:px-12">
            <form action="">
              <div className="md:w-[25vw] w-[85vw] rounded-xl flex flex-col md:gap-16 gap-8 md:py-6 py-4 md:px-8 px-5">
                <Input
                  type="email"
                  variant="underlined"
                  label="Email"
                  placeholder="Enter your email"
                  size="lg"
                  isRequired={true}
                />

                <Textarea
                  variant="underlined"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={value}
                  onValueChange={setValue}
                  size="lg"
                  isRequired={true}
                />

                <div className="buttons flex gap-12 justify-center items-center">
                  <Button>Submit</Button>
                  <Button>Call Us</Button>
                </div>
              </div>
            </form>
          </div>

          <div className="info border-1 border-[#A1A1A1] bg-[#0A0A0A] md:w-[25vw] w-[85vw] rounded-xl flex flex-col md:gap-16 gap-8 md:py-6 py-4 md:px-8 px-5">
            <div className="content flex flex-col gap-4 text-[#DADAD9]">
              <div className="title md:text-3xl text-xl font-semibold">
                Contact Info.
              </div>

              <div className="contacts flex flex-col justify-center items-start gap-4">
                <div className="mail flex items-center justify-end gap-4">
                  <img src="/mail.png" alt="" className="md:w-16 w-10" />
                  <span className="md:text-lg">bosonex@dummymail.com</span>
                </div>

                <div className="phone flex items-center justify-start gap-4">
                  <img src="/phone.png" alt="" className="md:w-12 w-8" />
                  <span className="md:text-lg">+091 3589875729</span>
                </div>

                <div className="location flex items-center justify-end gap-4">
                  <img src="/building.png" alt="" className="md:w-16 w-10" />
                  <span className="md:text-lg">Insert Location here</span>
                </div>

                <div className="timings flex items-center justify-center gap-4">
                  <img src="/timings.png" alt="" className="md:w-14 w-10" />
                  <span className="md:text-lg">never hundred hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
