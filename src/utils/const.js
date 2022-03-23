import packageJson from "../../package.json"
export const IDLE = "idle"
export const PENDING = "pending"
export const SUCCESS = "success"
export const FAILURE = "failure"

export const VERSION_NO = packageJson.version

export const MOBILE_SIZE = 768
export const TABLET_SIZE = 1280
export const DESKTOP_SIZE = 1920

export const MAX_CHAR_LENGTH = 255
export const WINDOWS_RESIZE_MS = 500
export const QUICK_WINDOWS_RESIZE_MS = 100

export const DEPARTMENT = "department"
export const POSITION = "position"

export const TABLE_PAGE_SIZE = 10
export const TABLE_PAGE_SIZE_TABLET = 8
export const SCREEN_TYPE = {
    MOBILE: "mobile",
    TABLET: "tablet",
    DESKTOP: "desktop",
    HD: "hd"
}

export const TEMP = {
    HIGH: "High",
    NORMAL: "Normal",
    NONE: "N/A"
}

export const TYPE = {
    LOADING: "loading",
    ADD: "add",
    EDIT: "edit"
}

export const TEMPERATURE_THRESHOLD = 37.5

export const MODAL_TYPE = {
    ERROR: "error",
    SERVER_ERROR: "server-error",
    NO_INTERNET_ERROR: "no-internet-error",
    HEADER_FULLSCREEN: "header-fullscreen"
}

export const NOTIFICATION_TYPE = {
    SUCCESS: "success",
    FAILURE: "failure",
    WARNING: "warning"
}

export const PASSWORD_TYPE = {
    CURRENT_PASSWORD: "currentpassword",
    NEW_PASSWORD: "newpassword",
    OLD_PASSWORD: "oldpassword"
}

export const LOCAL_STORAGE = {
    TOKEN: "token",
    UID: "uid",
    STORAGE: "storage"
}

export const REPORT_TYPE = {
    EMPLOYEE: "employee",
    DEPARTMENT: "department"
}

export const FILE_FORMAT = {
    PDF: 'PDF',
    CSV: 'CSV',
    TXT: 'TXT',
}
export const REGISTERED = "Registered"
export const NOT_REGISTERED = "Not Registered"

export const VALIDATION_TEXT = "Validation"
export const DOES_TEXT = "Does"
