import React from 'react'

function helperForm () {
  return (
    <div>
      <form>
        <input type="text" />
        <textarea placeholder="Description" id="" cols="30" rows="10"></textarea>
        <input type="text" placeholder="City" />
        <input type="text" placeholder="province" />
        <input type="number" placeholder="Expiary Date YYYY-MM-DD" />
        <input type="Submit" />
      </form>
    </div>
  )
}

export default helperForm
