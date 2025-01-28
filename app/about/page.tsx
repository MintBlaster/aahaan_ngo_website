"use client"

import Link from "next/link";
import {motion} from "framer-motion";

export default function About() {
    return (
        <main className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Learn about our mission and impact
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Introduction */}
                        <div>
                            <h2 className="text-3xl font-serif text-emerald-900 mb-6">आहन् सोशल हेल्प ऑर्गनाइजेशन में आपका स्वागत है</h2>
                            <p className="text-xl text-emerald-700 mb-4">आशा और बदलाव की एक नई किरण</p>
                            <p className="text-lg text-emerald-800 leading-relaxed">
                                2024 में स्थापित, आहन् सोशल हेल्प ऑर्गनाइजेशन एक समर्पित गैर-लाभकारी संस्था है, जो समाज में सकारात्मक बदलाव लाने और जरूरतमंदों की मदद के लिए प्रतिबद्ध है।
                                हिमाचल प्रदेश सोसाइटीज़ रजिस्ट्रेशन एक्ट, 25/2006 के तहत पंजीकृत, आहन् का उद्देश्य स्वास्थ्य, शिक्षा, महिला सशक्तिकरण,
                                दिव्यांग जनों (हैंडिकैप्ड), अनाथ बच्चों की देखभाल, गरीबों को अन्न और आवश्यक सुविधाओं की उपलब्धता, एम्बुलेंस सेवाएं,
                                पर्यावरण संरक्षण, नशामुक्ति जागरूकता, रक्तदान अभियान और सामुदायिक विकास जैसे क्षेत्रों में टिकाऊ और प्रभावी बदलाव लाना है।
                            </p>
                        </div>

                        {/* Mission Section */}
                        <div>
                            <h2 className="text-3xl font-serif text-emerald-900 mb-6">हमारा मिशन</h2>
                            <ul className="list-disc space-y-4 pl-6 text-emerald-700">
                                <li>सामुदायिक सशक्तिकरण: शिक्षा, स्वास्थ्य और कौशल विकास कार्यक्रमों के माध्यम से समग्र विकास करना।</li>
                                <li>सबके लिए स्वास्थ्य: ग्रामीण और वंचित क्षेत्रों में सुलभ और किफायती स्वास्थ्य सेवाएं सुनिश्चित करना।</li>
                                <li>दिव्यांग जनों की सहायता: दिव्यांग व्यक्तियों के लिए सहायक उपकरण, रोजगार के अवसर और विशेष शिक्षा कार्यक्रम उपलब्ध कराना।</li>
                                <li>अनाथ बच्चों की देखभाल: अनाथ और बेसहारा बच्चों को आश्रय, शिक्षा, पोषण और एक सुरक्षित भविष्य प्रदान करना।</li>
                                <li>गरीबों के लिए अन्न और एम्बुलेंस सुविधा: आर्थिक रूप से कमजोर वर्गों को भोजन, कपड़े, स्वास्थ्य सेवाएं और इमरजेंसी में एम्बुलेंस की सुविधा प्रदान करना।</li>
                                <li>रक्तदान अभियान: रक्त की कमी को पूरा करने के लिए रक्तदान शिविरों का आयोजन और लोगों को रक्तदान के महत्व के बारे में जागरूक करना।</li>
                                <li>नशामुक्ति जागरूकता: नशे की लत से मुक्ति पाने के लिए जन जागरूकता कार्यक्रमों का आयोजन।</li>
                                <li>पर्यावरण संरक्षण: पर्यावरण जागरूकता और टिकाऊ परियोजनाओं के माध्यम से प्रकृति की रक्षा करना।</li>
                                <li>समानता को बढ़ावा देना: लैंगिक समानता की वकालत करना और महिलाओं को बदलाव के नेता के रूप में सशक्त बनाना।</li>
                                <li>आपदा राहत: प्रभावित समुदायों को सहायता और पुनर्वास प्रदान करना।</li>
                            </ul>
                        </div>

                        {/* What We Do Section */}
                        <div>
                            <h2 className="text-3xl font-serif text-emerald-900 mb-6">हम क्या करते हैं?</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">रक्तदान शिविर (Blood Donation Camps)</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>रक्तदान शिविरों का आयोजन: अस्पतालों और अस्पतालों के साथ साझेदारी कर रक्तदान शिविरों का आयोजन, ताकि जरूरतमंद मरीजों को समय पर रक्त मिल सके।</li>
                                        <li>रक्तदान के महत्व पर जागरूकता फैलाना: लोगों को रक्तदान के फायदे और इसके प्रति जागरूक करने के लिए कैंपेन और कार्यक्रम आयोजित करना।</li>
                                        <li>स्वास्थ्य जांच और रक्तदान: शिविरों में स्वास्थ्य जांच की सुविधा भी प्रदान करना, ताकि लोग रक्तदान से पहले अपनी सेहत की स्थिति जान सकें।</li>
                                        <li>नियमित रक्तदान: यह सुनिश्चित करना कि रक्तदान एक निरंतर प्रक्रिया बने और लोगों को इसके प्रति जागरूक किया जाए।</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">नुक्कड़ नाटक के माध्यम से जागरूकता अभियान</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>नुक्कड़ नाटक के जरिए सामाजिक मुद्दों पर जागरूकता फैलाना।</li>
                                        <li>स्थानीय समुदायों में जाकर नाटक प्रस्तुत करना।</li>
                                        <li>बच्चों, युवाओं और वयस्कों को नाटक के माध्यम से जागरूक करना।</li>
                                    </ul>
                                </div>
                                {/* गरीबों के लिए अन्न और एम्बुलेंस सुविधा */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">गरीबों के लिए अन्न और एम्बुलेंस सुविधा</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• जरूरतमंद परिवारों को भोजन, कपड़े और अन्य आवश्यक वस्त्रों का वितरण।</li>
                                        <li>• आर्थिक रूप से कमजोर और ग्रामीण इलाकों में मुफ्त एम्बुलेंस सेवा।</li>
                                        <li>• इमरजेंसी हेल्थकेयर की सुविधाएं और मरीजों को अस्पताल तक पहुंचाने में मदद।</li>
                                        <li>• विशेष परिस्थितियों में मेडिकल सपोर्ट और स्वास्थ्य किट उपलब्ध कराना।</li>
                                    </ul>
                                </div>

                                {/* अनाथ बच्चों के लिए पहल */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">अनाथ बच्चों के लिए पहल</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• अनाथ बच्चों को सुरक्षित आश्रय, भोजन और शिक्षा प्रदान करना।</li>
                                        <li>• बेसहारा बच्चों के पुनर्वास और उनकी भावनात्मक ज़रूरतों को पूरा करना।</li>
                                        <li>• बच्चों को आत्मनिर्भर बनाने के लिए कौशल विकास और परामर्श सेवाएं।</li>
                                    </ul>
                                </div>

                                {/* दिव्यांग जनों के लिए पहल */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">दिव्यांग जनों के लिए पहल</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• व्हीलचेयर, बैसाखी और अन्य सहायक उपकरणों का वितरण।</li>
                                        <li>• दिव्यांग व्यक्तियों के लिए रोजगार और कौशल विकास कार्यक्रम।</li>
                                        <li>• विशेष शिक्षा और परामर्श सेवाएँ।</li>
                                    </ul>
                                </div>

                                {/* स्वास्थ्य सेवाएँ */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">स्वास्थ्य सेवाएँ</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• नि:शुल्क चिकित्सा शिविर और स्वास्थ्य जांच।</li>
                                        <li>• रक्तदान अभियान और स्वास्थ्य जागरूकता कार्यक्रम।</li>
                                        <li>• ग्रामीण और दुर्गम क्षेत्रों में आवश्यक स्वास्थ्य सेवाओं की उपलब्धता।</li>
                                        <li>• इमरजेंसी मेडिकल सेवाओं के लिए एम्बुलेंस का प्रबंध।</li>
                                    </ul>
                                </div>

                                {/* शिक्षा और कौशल विकास */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">शिक्षा और कौशल विकास</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• वंचित बच्चों और युवाओं के लिए छात्रवृत्ति और शैक्षिक सामग्री वितरण।</li>
                                        <li>• साक्षरता कार्यक्रम और डिजिटल शिक्षा पहल।</li>
                                        <li>• आत्मनिर्भरता के लिए व्यावसायिक प्रशिक्षण।</li>
                                    </ul>
                                </div>

                                {/* महिला सशक्तिकरण */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">महिला सशक्तिकरण</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• आर्थिक स्वतंत्रता के लिए प्रशिक्षण और सहयोग।</li>
                                        <li>• अधिकार, सुरक्षा और समानता पर जागरूकता अभियान।</li>
                                        <li>• महिलाओं को नेतृत्व भूमिकाओं में प्रोत्साहित करना।</li>
                                    </ul>
                                </div>

                                {/* पर्यावरण संरक्षण */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-medium text-emerald-900 mb-4">पर्यावरण संरक्षण</h3>
                                    <ul className="space-y-3 text-emerald-700">
                                        <li>• वृक्षारोपण अभियान और कचरा प्रबंधन परियोजनाएँ।</li>
                                        <li>• जलवायु परिवर्तन और टिकाऊ जीवनशैली पर जागरूकता कार्यक्रम।</li>
                                        <li>• जल संरक्षण और नवीकरणीय ऊर्जा की पहल।</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Team Section */}
                        <div>
                            <h2 className="text-3xl font-serif text-emerald-900 mb-6">हमारी टीम से मिलें</h2>
                            <p className="text-lg text-emerald-700">
                                आहन् को अनुभवी और दूरदर्शी पेशेवरों की एक टीम द्वारा चलाया जाता है, जो समाज के प्रति अपनी जिम्मेदारी निभाने के लिए समर्पित हैं।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-6">हमसे जुड़ें</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-emerald-50">
                        समाज में सकारात्मक बदलाव लाने के लिए हमारे साथ जुड़ें
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-md font-medium hover:bg-emerald-50 transition-colors shadow-lg">
                        संपर्क करें
                    </Link>
                </div>
            </section>
        </main>
    );
}
