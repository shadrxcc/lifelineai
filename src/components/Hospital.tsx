import React, { useEffect, useState } from "react";
import axios from "axios";

interface Journal {
  title: string;
  url: string;
  source: string;
}

const MedicalJournalsList: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get(
          "https://medical-articles-live.p.rapidapi.com/journals/diabetes",
          {
            headers: {
              "X-RapidAPI-Key": "9b9cedc9b9msha0b09b36c873fa9p142b1djsn145a4f433f7e",
              "X-RapidAPI-Host": "medical-articles-live.p.rapidapi.com",
            },
          }
        );

        // Assuming the response data is an array of journals
        const fetchedJournals: Journal[] = response.data;

        setJournals(fetchedJournals);
      } catch (error) {
        console.error("Error fetching journals:", error);
      }
    };

    fetchJournals();
  }, []);

  return (
    <div>
      <h2>Medical Journals</h2>
      <ul>
        {journals.map((journal, index) => (
          <li key={index}>
            <strong>{journal.title}</strong>
            <br />
            <span>Source: {journal.source}</span>
            <br />
            <a href={journal.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalJournalsList;
