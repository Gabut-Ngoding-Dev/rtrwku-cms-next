"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { loginSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";

type Input = z.infer<typeof loginSchema>;

const Page = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: Input) => {
    if (isConfirm) alert("Ingatkan saya");

    alert(JSON.stringify(data, null, 4));
  };

  return (
    <div className="w-full h-screen bg-primary-surface py-[105px] px-[61px]">
      <div className="bg-neutral-10 rounded-2xl w-full h-full flex justify-between overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[437px] flex flex-col items-center">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={204}
              height={60}
            />
            <h1 className="text-sm mt-[22px]">Akses layanan lingkunganmu dengan lebih mudah dan cepat</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-[73px] flex flex-col space-y-[25px]">
                {/* username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* confirm */}
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="true"
                      id="confirm"
                      checked={isConfirm}
                      onClick={() => setIsConfirm((prev) => !prev)}
                    />
                    <Label
                      htmlFor="confirm"
                      className="text-[12px] text-neutral-90">
                      Ingatkan saya
                    </Label>
                  </div>
                </RadioGroup>
                <Button
                  type="submit"
                  className="bg-primary-main hover:bg-primary-hover active:bg-primary-pressed text-white">
                  Submit
                </Button>
                <Link
                  href="#"
                  className="text-[12px]">
                  Recovery Password
                </Link>
              </form>
            </Form>
          </div>
        </div>
        <Image
          src="/LoginImage.svg"
          alt="Login Image"
          width={712}
          height={623}
        />
      </div>
    </div>
  );
};

export default Page;
