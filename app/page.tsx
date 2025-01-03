// app/page.tsx
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FocusAreas from "@/components/FocusArea";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import { content } from "@/data/content";

export default function Home() {
    return (
        <main className="bg-emerald-50">
            <Hero content={content.hero} />
            <Mission content={content.mission} />
            <FocusAreas content={content.focus} />
            <Impact content={content.impact} />
            <GetInvolved content={content.getInvolved} />
        </main>
    );
}
