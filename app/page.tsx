// app/page.tsx
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import GetInvolved from "@/components/GetInvolved";
import { messages } from "@/data/messages";
import { content } from "@/data/content";
import MessageSection from "@/components/Messages";

export default function Home() {


    return (
        <main className="bg-emerald-50">
            <Hero content={content.hero}/>
            <Mission content={content.mission}/>
            {messages.map((msg, index) => (
                <MessageSection
                    key={msg.name}
                    message={msg}
                    isReverse={index % 2 !== 0}
                />
            ))}
            <GetInvolved content={content.getInvolved}/>
        </main>
    );
}
