import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import useStore from "./zustand";
import { useTranslation } from "react-i18next";
import SecondSwitcher from "./SecondSwitcher";

export function DrawerDefault() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const { t } = useTranslation("layout");
    const { theme, toggleTheme } = useStore();

    return (
        <React.Fragment>
            <button onClick={openDrawer} className="lg:hidden flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#009494"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>
            <Drawer
                open={open}
                onClose={closeDrawer}
                placement="right"
                className="p-2 bg-oq dark:bg-dakr"
            >
                <div className="mb-6 flex items-center justify-between">
                    <IconButton
                        variant="text"
                        className="rounded-full border-2 border-gren p-2"
                        color="blue-gray"
                        onClick={closeDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        <img
                            src="https://www.svgrepo.com/show/493523/teacher-male.svg"
                            alt=""
                            width={20}
                        />
                        <span className="text-qora dark:text-oq">
                            {t("Teacher")}
                        </span>
                    </div>

                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        <img
                            src="https://www.svgrepo.com/show/382165/book-shelf-books-education-learning-school-study.svg"
                            alt=""
                            width={20}
                        />
                        <span className="text-qora dark:text-oq">
                            {t("Courses")}
                        </span>
                    </div>

                    <div className="border-2 border-gren p-3 w-full rounded-xl flex flex-row items-center gap-[10px]">
                        <img
                            src="https://www.svgrepo.com/show/324120/graduation-education-cap-mortarboard-graduate.svg"
                            alt=""
                            width={20}
                        />
                        <span className="text-qora dark:text-oq">
                            {t("Result")}
                        </span>
                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-between p-4 mt-[40px] border-2 border-gren rounded-xl">
                    <div className="flex flex-row items-center gap-[10px]">
                        <span className="text-qora dark:text-oq">
                            {theme === "light" ? "Light Mode" : "Dark Mode"}
                        </span>
                        <button onClick={toggleTheme}>
                            <img
                                src={theme === "light" ? "/moon.png" : "/sun.png"}
                                alt={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                                width={25}
                            />
                        </button>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
}