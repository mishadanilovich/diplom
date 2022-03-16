import React, { useMemo, useState } from 'react'
import { MarksContainer, TableHeaderItem, TableItem, TableRow } from './styles'
import { Props } from './types'
import * as naming from '../../constants'
import { Filter } from '../Filter'

export const MarksTable = ({ data }: Props) => {
  const [filterInput, setFilterInput] = useState('')
  const dataTable = useMemo(() => {
    return data.filter((el) =>
      el.username.toLowerCase().includes(filterInput.toLowerCase())
    )
  }, [filterInput])

  return (
    <>
      {!data?.length ? (
        <div className="center">
          <h2>{naming.NO_MARKS}</h2>
        </div>
      ) : (
        <MarksContainer>
          <Filter data={filterInput} onChange={setFilterInput} />
          <TableRow>
            <TableHeaderItem style={{ textAlign: 'start' }}>
              {naming.USERNAME_COLUMN}
            </TableHeaderItem>
            <TableHeaderItem>{naming.TEST_MARK_COLUMN}</TableHeaderItem>
            <TableHeaderItem>{naming.TASK_MARK_COLUMN}</TableHeaderItem>
          </TableRow>
          {dataTable.map((el, i) => (
            <TableRow key={i}>
              <TableItem style={{ textAlign: 'start' }}>
                {el.username}
              </TableItem>
              <TableItem>{el.testMark || '-'}</TableItem>
              <TableItem>{el.taskMark || '-'}</TableItem>
            </TableRow>
          ))}
          {!dataTable.length && (
            <div className="center">
              <h3>{naming.NO_RESULT}</h3>
            </div>
          )}
        </MarksContainer>
      )}
    </>
  )
}
