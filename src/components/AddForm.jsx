import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !date) {
      alert("Please add a task/date");
      return;
    }

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Set Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Set Date</label>
        <input
          type='text'
          placeholder='Add Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value={"Submit Task"} className='btn btn-block' />
    </form>
  );
};

export default AddForm;
