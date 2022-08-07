import { formatDistance, formatISO } from 'date-fns'
import { parseISO } from 'date-fns/esm';
import React from 'react'

const TimeAgo = ({content}) => {
  const data = new Date()
  const createDate = parseISO(content.created_at);

  const isoData = formatDistance(createDate, data);
  return (
    <p className='text-xs font-bold'>{isoData} ago</p>
  )
}

export default TimeAgo