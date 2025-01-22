export type BaseUser = {
    id: string;
    name: string;
    email: string;
    phone: string;
    gender: string;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    modifiedAt: string;
    agreeToTerms: boolean;
};

export type User = BaseUser & {
    type: "user";
    userType: string;
    preferredLanguage: {
        english: boolean;
        hindi: boolean;
        kannada: boolean;
        tamil: boolean;
    };
};

export type Admin = BaseUser & {
    type: "admin";
    permissions: {
        read: boolean;
        write: boolean;
        edit: boolean;
        delete: boolean;
    };
    adminNotes: string;
};

export type UserOrAdmin = User | Admin;

