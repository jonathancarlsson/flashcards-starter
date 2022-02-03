/*Next, you’ll need to hook the new topic form up to the action creators your slice generates. 
In src/components/NewTopicForm.js, import addTopic and dispatch it from the event handler 
that runs when the new topic form is submitted.

Verify that your code is working by filling out the form and submitting it.
You should be redirected to the /topics page and should see your newly created topic there.
*/

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTopic } from "../features/topics/topicsSlice";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";

export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    // dispatch your add topic action herel

    dispatch(addTopic({ name: name, id: uuidv4(), icon }));
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
