import React, { useEffect } from "react";
import { Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import apiClient from "../../axios/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ContentLists = ({
  contentList,
  deleteContent,
  deleteContentModel,
  setDeleteContentModel,
  editContentModel,
  setEditContentModel,
}) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const [title, setTitle] = useState(selectedContent?.title || "");
  const [description, setDescription] = useState(
    selectedContent?.description || ""
  );
  const [inputText, setInputText] = useState(selectedContent?.inputText || "");
  const [type, setType] = useState(selectedContent?.type || "");
  const [promt, setPromt] = useState(selectedContent?.promt || "");
  const [tools, setTools] = useState(["gemini", "groq"]);
  const [selectedTools, setSelectedTools] = useState(
    selectedContent?.aiTool || []
  );
  const {currentUser} = useSelector(state => state.user);

  const handleDelete = (content) => {
    setSelectedContent(content);
    setDeleteContentModel(true);
  };

  const handleEditContent = (selectedContent) => {
    setSelectedContent(
      contentList.find((content) => content === selectedContent)
    );
    setEditContentModel(true);
  };

  const updateContent = () => {
    apiClient.put(`/admin/content/update/${selectedContent._id}`,{
      id: currentUser._id,
      title,
      description,
      inputText,
      type,
      promt,
      aiTool:selectedTools
    }).then((res) => {
      toast.success(res.data.message);
      setEditContentModel(false);
    }).catch((err) => {
      toast.error(err.message);
      setEditContentModel(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedTools.length == 0
      ? toast.error("Please select at least one tool")
      : updateContent();
  };

  useEffect(() => {
    setTitle(selectedContent?.title || "");
    setDescription(selectedContent?.description || "");
    setInputText(selectedContent?.inputText || "");
    setType(selectedContent?.type || "");
    setPromt(selectedContent?.promt || "");
    setSelectedTools(selectedContent?.aiTool || []);
  }, [selectedContent]);

  return (
    <>
      <div className="bg-gray-50 dark:text-white dark:bg-gray-700 h-full overflow-y-auto scroll-smooth mb-10 ">
        <div className=" bg-white dark:bg-gray-800 rounded-xl py-10 mb-10">
          <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">
            Contents
          </div>
          <div className="mx-10 rounded-xl border p-3 mb-10">
            <table className="w-full text-lg  rounded-xl border dark:border-none">
              <thead className="p-5 rounded-full">
                <tr className="text-xl text-gray-500 bg-blue-100 h-14 border-b">
                  <th>Title</th>
                  <th>Description</th>
                  <th>Input Text</th>
                  <th>Promt</th>
                  <th>AI Tool</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody className="p-5 dark:bg-gray-700">
                {contentList.map((content) => {
                  return (
                    <tr
                      key={content._id}
                      className="h-14 border-t dark:border-gray-800"
                    >
                      <td className="">
                        &nbsp; &nbsp;
                        {content.title.length < 25
                          ? content.title
                          : content.title.substring(0, 25) + "..."}
                      </td>
                      <td>
                        {content.description.length < 25
                          ? content.description
                          : content.description.substring(0, 25) + "..."}
                      </td>
                      <td>
                        {content.inputText.length < 25
                          ? content.inputText
                          : content.inputText.substring(0, 25) + "..."}
                      </td>
                      <td>
                        {content.promt.length < 25
                          ? content.promt
                          : content.promt.substring(0, 25) + "..."}
                      </td>
                      <td className="">
                        {content.aiTool.map((tool) => {
                          return (
                            <button
                              disabled
                              type="button"
                              className={
                                "bg-black py-1 px-2 text-white rounded-full mr-3  border border-black"
                              }
                            >
                              {tool}
                            </button>
                          );
                        })}
                      </td>
                      <td>
                        <button
                          onClick={() => handleEditContent(content)}
                          type="button"
                          className={
                            "bg-blue-200 hover:bg-blue-300 py-1 px-2 text-black rounded-full mr-3  "
                          }
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(content)}
                          type="button"
                          className={
                            "bg-red-500 hover:bg-red-600 py-1 px-2 text-white rounded-full mr-3"
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* delete content model */}
      <Modal
        show={deleteContentModel}
        size="md"
        onClose={() => setDeleteContentModel(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this content?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => deleteContent(selectedContent._id)}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setDeleteContentModel(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* edit content model */}
      <Modal
        show={editContentModel}
        onClose={() => setEditContentModel(false)}
        size="md"
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit content
            </h3>
            <div className="bg-blue-200 rounded-xl p-3">
              <div className="mt-3">
                <div>Title</div>
                <input
                  type="text"
                  className="rounded-xl w-full border-none"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <div>Description</div>
                <input
                  type="text"
                  className="rounded-xl w-full border-none"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <div>Input text</div>
                <input
                  type="text"
                  className="rounded-xl w-full border-none"
                  required
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <div>Type</div>
                <input
                  type="text"
                  className="rounded-xl w-full border-none"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <div>Promt</div>
                <input
                  type="text"
                  className="rounded-xl w-full border-none"
                  required
                  value={promt}
                  onChange={(e) => setPromt(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <div>AI tool</div>
                {tools.map((tool) => (
                  <button
                    type="button"
                    key={tool}
                    onClick={
                      selectedTools.includes(tool)
                        ? () =>
                            setSelectedTools(
                              selectedTools.filter(
                                (selectedTool) => selectedTool !== tool
                              )
                            )
                        : () => setSelectedTools([...selectedTools, tool])
                    }
                    className={
                      selectedTools.some(
                        (selectedTool) => selectedTool === tool
                      )
                        ? "bg-black text-white p-3 rounded-full mr-3  border border-black"
                        : " p-3 rounded-full dark:border-white border border-black mr-3"
                    }
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full p-3 disabled:opacity-80"
              >
                Save changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContentLists;
