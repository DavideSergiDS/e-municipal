
import casual from "casual";

export const MunicipalAreaMock = {
    MunicipalArea: () => ({
        name: casual.name,
        city: casual.city,
        province: casual.city,
        state: casual.state
    }),
};

