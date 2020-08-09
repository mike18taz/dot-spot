import React from 'react'

const Table = props => {
  const { dotData, removeDot } = props

  return (
    <table>
      <TableHeader />
      <TableBody dotData={dotData} removeDot={removeDot} />
    </table>
  )
}

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
        </tr>
      </thead>
    )
}

const TableBody = props => {
    const rows = props.dotData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>
                    <button onClick={() => props.removeDot(index)}>Remove</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


export default Table