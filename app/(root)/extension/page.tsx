import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <main className="flex-1">
      <section>
        <div className="flex flex-col items-center space-y-4 text-center font-bold">
          <h1 className="text-primary-500 text-heading1-bold">
            Enhance Your Language Learning with Linguo Extension
          </h1>
        </div>
        <div className="mt-9">
          <p className="text-gray-500 mx-auto max-w-[700px] text-center text-heading3-bold">
            Linguo is the ultimate Chrome extension for learning any Language by watching your favourite Youtube videos.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
        <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white hover:opacity-80 py-4 px-10 text-lg">
          <Link href="https://chrome.google.com/webstore" target="_blank">
            Install Extension
          </Link>
        </Button>
        </div>
      </section>
      
      <section className="flex flex-row mt-5">
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 text-gray-100">
        <Card className="w-full md:w-80 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-400">Linguo Monthly plan</CardTitle>
          <div className="text-5xl font-bold text-green-400">
            $10<span className="text-lg align-top">*</span>
            <span className="text-lg font-normal"> /month</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-6">
          Enjoy all the premium features of Linguo with the flexibility of a monthly subscription. Get interactive learning, personalized quizzes, and more.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p>Interactive Learning</p>
            </li>
            <li className="flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p>Personalized Quizzes</p>
            </li>
            <li className="flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p>Multi-Language Support</p>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button className="w-full bg-transparent text-green-400 border border-green-400 hover:bg-green-400 hover:text-gray-900">
            Get Linguo
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full md:w-80 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-400">Linguo Yearly Plan</CardTitle>
          <div className="text-5xl font-bold text-purple-400">
            $99<span className="text-lg font-normal"> /year</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-6">
            For individuals who want access these features without paying monthly.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Everything in Linguo Plus
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 pt-26">
          <Button className="w-full bg-transparent text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-gray-900 mt-20">
            Get Linguo
          </Button>
        </CardFooter>
      </Card>

        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col items-center space-y-4 text-center font-bold">
          <h2 className="text-white text-heading2-bold">
            Features
          </h2>
        </div>
        <div className="flex flex-col text-white items-start">
          <p className="py-2 text-gray-500 font-semibold text-center">
           1. Interactive Learning: Engage with AI-powered questions about the YouTube videos you watch, enhancing comprehension and retention of language skills.
          </p>
          <p className="py-2 text-gray-500 font-semibold text-center">
           2. Personalized Quizzes: Receive customized quizzes based on your viewing habits and learning progress to reinforce language concepts and vocabulary.
          </p>
          <p className="py-2 text-gray-500 font-semibold text-center">
           3. Multi-Language Support: Learn multiple languages through curated video content across different genres and subjects.
          </p>
          <p className="py-2 text-gray-500 font-semibold text-center">
           4. User-Friendly Interface: Enjoy a seamless and intuitive user experience with easy navigation and accessibility to language exercises and resources.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Page;
