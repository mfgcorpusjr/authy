"use server";

import { signOut } from "@/auth";

const signOutAction = async () => {
  await signOut();
};

export default signOutAction;
