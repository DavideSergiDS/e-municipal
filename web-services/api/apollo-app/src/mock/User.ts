import casual from "casual";
import { AttachmentMock } from "./attachment";

export const UserMock = {
  User: () => ({
    username: casual.username,
    email: casual.email,
    casual: casual.date(),
    photo: AttachmentMock.Attachment()
  }),
};