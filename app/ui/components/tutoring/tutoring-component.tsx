"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  BarChart2, 
  Clock, 
  Award, 
  Users, 
  FileText, 
  ClipboardCheck, 
  FlaskConical, 
  PenTool,
  GraduationCap,
  MessageSquare,
  Calculator
} from "lucide-react";

export default function TutoringFeatures() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Full course management from modules to final exams",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      text: "Discussion boards & participation engagement",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Assignments, homework & projects completed",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      text: "Exams, quizzes & tests handled securely",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      text: "Virtual labs & simulations support",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      text: "Essays, papers & thesis writing assistance",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-background text-primary">
      <div className="w-full mx-auto max-w-full lg:max-w-310 px-4 md:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Comprehensive Online Class Help <br />
            <span className="">From Modules to Final Exams</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Why hire multiple tutors when one expert can handle it all? Our <strong>take my online class for me</strong> service covers every single component of your online course.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="space-y-6"
          >
            {/* Full Course Management */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <GraduationCap className="text-emerald-600" />
                Take My Online Class for Me – Full Course Management
              </h3>
              <p className="text-gray-600">
                Why struggle with multiple deadlines when you can hire a dedicated academic manager? Our <strong>take my online class for me</strong> service offers an all-inclusive solution for students who need total syllabus coverage. Whether you need help with complex LMS modules on <strong>Canvas</strong>, a timed <strong>proctored exam</strong>, or weekly discussion boards, we don&apos;t just do your homework — we <strong>guarantee your grade</strong>.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Canvas</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Blackboard</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Moodle</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Pearson MyLab</span>
              </div>
            </motion.div>

            {/* Discussions & Participation */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Users className="text-secondary" />
                Pay Someone To Do My Online Class: Discussions & Participation
              </h3>
              <p className="text-gray-600">
                Discussion boards are the <strong>&quot;attendance&quot;</strong> of online learning, requiring daily engagement to maintain a high grade. Students often pay someone to do their homework and participate actively in class discussions. Our experts ensure you never miss a post and maintain meaningful engagement throughout your course.
              </p>
            </motion.div>

            {/* Assignments & Homework */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <FileText className="text-secondary" />
                Do My Online Class For Me: Assignments, Homework & Projects
              </h3>
              <p className="text-gray-600">
                Modern courses use adaptive learning platforms that adjust difficulty based on your answers. When you say <strong>&quot;do my online class for me&quot;</strong>, you need experts familiar with third-party tools like <strong>Pearson MyLab</strong>, <strong>McGraw-Hill Connect</strong>, and <strong>Sophia</strong>. We handle all assignments with precision and on-time delivery.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="space-y-6"
          >
            {/* Exams & Quizzes */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <ClipboardCheck className="text-secondary" />
                Pay Someone To Take My Online Class: Exams, Quizzes & Tests
              </h3>
              <p className="text-gray-600">
                The highest source of student anxiety is the timed assessment. Students who need <strong>&quot;do my exam for me&quot;</strong> require absolute security during high-stakes testing. We handle <strong>proctored exams</strong>, <strong>lockdown browser tests</strong>, and timed quizzes with complete confidentiality and guaranteed results.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">ProctorU</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Honorlock</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Respondus</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Pearson VUE</span>
              </div>
            </motion.div>

            {/* Virtual Labs & Simulations */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <FlaskConical className="text-secondary" />
                Hire Someone To Take My Online Class: Virtual Labs & Simulations
              </h3>
              <p className="text-gray-600">
                STEM courses require technical simulation work that standard tutors cannot handle. If you need to <strong>hire someone to take my online class</strong> for subjects like <strong>Chemistry</strong>, <strong>Physics</strong>, or <strong>Biology</strong>, we have the specialists. Our experts navigate complex virtual lab environments and simulation software with ease.
              </p>
            </motion.div>

            {/* Essays & Papers */}
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <PenTool className="text-secondary" />
                Pay Someone To Do My Online Class For Me: Essays, Papers & Thesis
              </h3>
              <p className="text-gray-600">
                Writing requirements in online courses range from weekly reflection journals to massive capstone projects. Our <strong>pay someone to do my online class for me</strong> service includes a dedicated academic writing team that delivers original, well-researched, and plagiarism-free content for all your writing needs.
              </p>
            </motion.div>

            {/* CTA Button */}
            <Link href="#hero">
              <motion.button
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer py-4 bg-secondary hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                Get Online Class Help Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Feature List - Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-12 bg-slate-50 p-8 rounded-xl border border-gray-200"
        >
          <motion.h3 variants={item} className="text-2xl font-bold mb-6 text-center">
            What We Cover in Your Online Class
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
              >
                <span className="text-emerald-500">{feature.icon}</span>
                <span className="text-sm text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
