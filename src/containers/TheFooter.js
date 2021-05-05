import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://martin001.netlify.app" target="_blank" rel="noopener noreferrer">Martin Mwangi Wanjiku</a>
        <span className="ml-1">&copy; 2020 design.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
