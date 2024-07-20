import React from "react";
import { Button, Modal } from "flowbite-react";
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
}) => {
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handleDelete = (contentId) => {
    setSelectedContentId(contentId);
    setDeleteContentModel(true);
  };

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
                          type="button"
                          className={
                            "bg-blue-200 hover:bg-blue-300 py-1 px-2 text-black rounded-full mr-3  "
                          }
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(content._id)}
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
                onClick={() => deleteContent(selectedContentId)}
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
    </>
  );
};

export default ContentLists;
