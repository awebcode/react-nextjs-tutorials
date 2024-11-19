"use server";

export const updateUserAction = async (prev:unknown,formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = Object.fromEntries(formData.entries());
   console.log({ data });
};
