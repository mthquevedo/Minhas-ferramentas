import QRCodeLink from "qrcode";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { ReturnHomeButton } from "../../components/ReturnHomeButton";

export function QrCode() {
    const [link, setLink] = useState("");
    const [qrcodeLink, setQrcodeLink] = useState("")
    console.log(qrcodeLink);

    function handleQrcode(e: React.ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value);
        handleGenerate(e.target.value);
    }

    function handleGenerate(linkUrl: string) {
        QRCodeLink.toDataURL(linkUrl, {
            width: 600,
            margin: 3,
        }, function (err, url) {
            setQrcodeLink(url);
        })
    }

    return (
        <main className="flex-1">
            <ReturnHomeButton />
            <main className="h-5/6 flex justify-center items-center  gap-5">

                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Digite seu link..."
                        value={link}
                        onChange={(e) => handleQrcode(e)}
                    />

                    <a href={qrcodeLink} download={"mq_qrcode.png"}>Baixar QrCode</a>
                </div>

                <QRCode
                    value={link}
                />
            </main>
        </main>
    );
}