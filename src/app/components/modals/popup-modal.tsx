"use client";
import React, { ReactNode } from "react";

type PopupModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    header: string;
};

export default function PopupModal({ isOpen, onClose, children, header }: PopupModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
            {/* Modal */}
            <section className="relative z-10 w-[720px] max-w-[95vw] rounded-xl bg-white shadow-2xl">
                {/* Header */}
                <header className={`flex flex-col items-center justify-center p-3 border-b border-[#eee] gap-4`}>
                    <h1 className="text-xl font-extrabold text-(--primary) text-center">{header}</h1>
                </header>
                {/* Content */}
                <div className="flex flex-col gap-4 p-5">
                    {children}
                </div>
            </section>
        </div>
    );
}