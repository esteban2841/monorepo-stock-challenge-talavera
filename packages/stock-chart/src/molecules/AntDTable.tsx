import { Table } from 'antd';
import { Suspense } from 'react';
import styled from 'styled-components';

interface Column{
    title: string
    dataIndex: string
    key: string
    responsive?: ['sm'] | ['md'] | ['lg']
}

interface ColumnsType {
    data: Column[]
}


const StyledTableContainer = styled.div`
    width: 100%;
`;

const AntDTable = ({data}: any) => {

    const columns: Column[] = [
        {
          title: 'Units Adquired',
          dataIndex: 'symbolUnits',
          key: 'symbolUnits',
        },
        {
          title: 'Symbol',
          dataIndex: 'symbol',
          key: 'symbol',
        },
        {
          title: 'Stock Value',
          dataIndex: 'close',
          key: 'close',
        },
        {
          title: 'Adquisition date',
          dataIndex: 'date',
          key: 'date',
        },
        
    ]
    
  return (
    <div>
      <StyledTableContainer>
        <Suspense fallback={<Table columns={columns} bordered loading rowKey="uid" />}>
          <Table columns={columns} dataSource={data}  rowKey="uid"/>
        </Suspense>
      </StyledTableContainer>
    </div>
  )
}

export default AntDTable
