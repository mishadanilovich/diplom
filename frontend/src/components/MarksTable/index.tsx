import React from 'react'
import { MarksContainer, TableHeaderItem, TableItem, TableRow } from './styles'
import { Props } from './types'
import * as naming from '../../constants'

export const MarksTable = ({ data }: Props) => {
  return (
    <>
      {!data?.length ? (
        <div className="center">
          <h2>{naming.NO_MARKS}</h2>
        </div>
      ) : (
        <MarksContainer>
          <TableRow>
            <TableHeaderItem style={{ textAlign: 'start' }}>
              {naming.USERNAME_COLUMN}
            </TableHeaderItem>
            <TableHeaderItem>{naming.TEST_MARK_COLUMN}</TableHeaderItem>
            <TableHeaderItem>{naming.TASK_MARK_COLUMN}</TableHeaderItem>
          </TableRow>
          {data.map((el, i) => (
            <TableRow key={i}>
              <TableItem style={{ textAlign: 'start' }}>
                {el.username}
              </TableItem>
              <TableItem>{el.testMark || '-'}</TableItem>
              <TableItem>{el.taskMark || '-'}</TableItem>
            </TableRow>
          ))}
        </MarksContainer>
      )}
    </>
  )
}
