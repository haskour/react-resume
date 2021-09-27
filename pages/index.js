import Head from "next/head";
import ProfileImage from "../components/ProfileImage";
import ListWithTitle from "../components/ListWithTitle";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import ResumeSection from "../components/ResumeSection";
import AboutDescription from "../components/AboutDescription";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
export default function Home() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(async () => {
    await fetch("/api/data")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);
  return (
    <UserContext.Provider value={data}>
      <div className="w-full">
        <Head>
          <title>{data.name} React CV</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main-page">
          <div className="left-col">
            <ProfileImage />

            <ListWithTitle
              title="COMPÉTENCES PROFESSIONNELLES"
              items={data.skills}
            />

            <ListWithTitle
              title="COMPÉTENCES PERSONNELLES"
              items={data.personalSkills}
            />

            <ListWithTitle title="CONTACT" items={data.contact} keyVal={true} />
          </div>
          <div className="right-col">
            <div className="right-col-container">
              <Header />
              <ResumeSection title="à propos">
                <AboutDescription />
              </ResumeSection>

              <ResumeSection title="EXPÉRIENCE PROFESSIONNELLE">
                <ExperienceSection />
              </ResumeSection>

              <ResumeSection title="ÉDUCATION">
                <EducationSection />
              </ResumeSection>
            </div>
          </div>
        </main>
      </div>
    </UserContext.Provider>
  );
}
