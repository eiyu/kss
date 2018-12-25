import React from 'react'

// position center top
const TaskDetails = (props) => (
  <div>
    <div>item titles</div>
    <div>Task Description</div>
    <div>Point</div>
    <div>Status</div>
    {/* create separate component with */}
    <div className="button-group">
      <button>Delete</button> {/*first step button position left*/}
      <button>Go to Prev Status</button>
      <button>Go to Next Status</button>
      <button>Delete</button> {/*last step button position right*/}
    </div>
  </div>
)

export default TaskDetails
