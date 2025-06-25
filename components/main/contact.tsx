"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import EarthCanvas from "../sub/earth-canvas";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "../ui/use-toast";


const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(3).max(50),
});

// template_dtl7bb1
// service_r9kj9n5
// dDbPTJcAk7LS-tP6y

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const { name, email, message } = values;
    emailjs.send('service_r9kj9n5', 'template_dtl7bb1', {
      from_name: name,
      to_name: 'Meenakshi',
      from_email: email,
      to_email: 'meenakshimariyappan16@gmail.com',
      message: message,
    }, 'dDbPTJcAk7LS-tP6y').then(() => {
      setLoading(false);
      toast({
        title: 'Success',
        description: 'Thank you. I will get back to you as soon as possible',
      })
      console.log(process.env.ACCOUNT_ID);
      form.reset();
    }).catch(() => {
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Something went wrong!',
      })    })
  };
  return (
    <>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Get in touch
      </h1>
      <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="flex-1 bg-black-100 p-8 rounded-2xl m-14 bg-[#1D1836] max-xs:m-4"
        >
          <h3
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            id="contact"
          >
            Contact
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="mt-12 flex flex-col gap-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium mb-4">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's your good name?"
                        {...field}
                        className="py-4 px-6 bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium mb-4">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's your email?"
                        {...field}
                        className="py-4 px-6 bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium mb-4">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="What do you want to say ?" {...field} className="py-4 px-6 bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-[#050816] rounded-xl">{loading ? "Sending..." : "Send"}</Button>
            </form>
          </Form>
        </motion.div>
        <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};
