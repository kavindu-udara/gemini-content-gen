import React, { useEffect, useState } from "react";
import { FcStart } from "react-icons/fc";
import { Button, Spinner, Clipboard } from "flowbite-react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import apiClient from "../axios/axios";

const GenerateContent = () => {
  const [promt, setPromt] = useState("");
  const [response, setResponse] = useState("");

  const GenerateContent = () => {
    if (promt === "") {
      alert("Enter blog information");
    } else {
      setResponse("Please wait...");
      apiClient
        .post("/gemini/generate/test", {
          reqPrompt: promt,
        })
        .then((res) => {
          setResponse(res.data.response);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    const options = {
      debug: "info",
      modules: {
        toolbar: true,
      },
      placeholder: "Compose an epic...",
      theme: "snow",
    };

    const quill = new Quill("#editor", options);

    const Delta = Quill.import("delta");
    quill.setContents(
      new Delta().insert(response ? response : "Enter your blog information")
    );
  }, []);

  return (
    <>
      <div className="flex flex-row gap-10  mx-5 my-5">
        <div className="basis-1/3 rounded-xl shadow-lg border  p-5">
          <FcStart className="text-3xl mb-5" />
          <div className="text-2xl text-fuchsia-600 mb-5">Blog Title</div>
          <div className="text-gray-400 mb-5">
            An AI tool that generate blog title depends on your blog information
          </div>
          <div className="mb-3 font-semibold">Enter your blog niche</div>
          <input
            type="text"
            className="rounded-lg border border-gray-500 w-full"
            onChange={(e) => setPromt(e.target.value)}
            value={promt}
          />
          <div className="mb-3 mt-5 font-semibold">
            Enter your blog information
          </div>
          {/* <textarea
          rows="10"
          name=""
          id=""
          className="rounded-lg border border-gray-500 w-full"
        ></textarea> */}
          <button
            onClick={() => GenerateContent()}
            className="rounded-lg bg-fuchsia-700 disabled:bg-fuchsia-400 text-white py-3 mt-5 w-full"
          >
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Generating...</span>
          </button>
        </div>
        <div className="basis-2/3 rounded-xl shadow-lg p-5 border">
          <div className=" flex flex-row justify-between mx-5 my-3 items-center">
            <div className="font-semibold text-lg">Result</div>
            <div>
              {/* <button className="bg-fuchsia-700 rounded-lg text-white p-3">copy</button> */}
              <Clipboard valueToCopy={response} label="Copy" />
            </div>
          </div>
          <div
            className="rounded-lg h-96 text-base"
            id="editor"
            dangerouslySetInnerHTML={{ __html: response }}
          />
          {/* <div dangerouslySetInnerHTML={{ __html: response }} /> */}
        </div>
      </div>
    </>
  );
};

export default GenerateContent;

// {
//   "success": true,
//   "response": [
//       {
//           "text": "```python\nimport random\n\ndef tell_a_story():\n  \"\"\"\n  This function generates a random short story.\n  \"\"\"\n\n  # Define lists of elements for the story\n  characters = [\"a brave knight\", \"a mischievous elf\", \"a wise old wizard\", \"a cunning dragon\", \"a beautiful princess\"]\n  places = [\"a dark forest\", \"a towering castle\", \"a hidden cave\", \"a bustling marketplace\", \"a magical meadow\"]\n  events = [\"a fierce battle\", \"a daring rescue\", \"a lost treasure\", \"a mysterious curse\", \"a forbidden love\"]\n\n  # Choose random elements from the lists\n  character = random.choice(characters)\n  place = random.choice(places)\n  event = random.choice(events)\n\n  # Construct the story\n  story = f\"Once upon a time, {character} lived in {place}. One day, {character} found themselves involved in {event}...\"\n\n  return story\n\n# Call the function and print the story\nstory = tell_a_story()\nprint(story)\n```\n\n**Explanation:**\n\n1. **Import `random` module:** This line imports the `random` module, which provides functions for generating random numbers and choices.\n2. **Define `tell_a_story()` function:** This function generates the story.\n3. **Create lists:** Three lists are created, containing various story elements: `characters`, `places`, and `events`.\n4. **Choose random elements:** Using the `random.choice()` function, the code picks a random element from each list.\n5. **Construct the story:** A string is constructed using f-strings, combining the chosen character, place, and event to create a basic story sentence.\n6. **Return the story:** The `story` variable containing the generated sentence is returned.\n7. **Call the function:** The `tell_a_story()` function is called, and the returned story is stored in the `story` variable.\n8. **Print the story:** The generated `story` is printed to the console.\n\nThis code generates a very simple, short story. To make it more elaborate and interesting, you can:\n\n* **Expand the lists:** Add more elements to each list, with more variety and details.\n* **Add more sentences:** Include more details about the character, place, event, and their connections to each other.\n* **Use conditional statements:**  Decide which story elements to use based on other elements, creating different story variations.\n* **Include a plot:** Develop a storyline with a beginning, middle, and end, instead of just a single sentence. \n* **Use other random elements:** Include random elements like adjectives, verbs, and dialogue to make the story more dynamic.\n\nRemember, this is a basic starting point. Feel free to experiment and make it your own! \n"
//       }
//   ],
//   "message": "success"
// }
