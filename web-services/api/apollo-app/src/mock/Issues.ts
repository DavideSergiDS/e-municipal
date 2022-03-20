import casual from "casual";
import { AttachmentMock } from "./attachment";
import { MunicipalAreaMock } from "./MunicipalArea";
import { UserMock } from "./User";

export const IssueMock = {
    Issue: () => ({
        title: casual.string,
        description: casual.description,
        creationDate: casual.date(),
        lastUpdateDate: casual.date(),
        status: 0,
        user: UserMock.User(),
        municipalArea: MunicipalAreaMock.MunicipalArea(),
        attachments: [AttachmentMock.Attachment()]
    }),
};

