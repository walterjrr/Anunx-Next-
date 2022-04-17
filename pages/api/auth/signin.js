import nextConnect from "next-connect";
import { post } from "../../../src/Controllers/auth/signin";

const route = nextConnect();

route.post(post);

export default route;