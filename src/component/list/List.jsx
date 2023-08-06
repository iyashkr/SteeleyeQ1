import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

import timestamp from "../../assets/timeStamps.json"

const List = ({ rows, currency, searchFilter, setSelectedOrderDetails, setSelectedOrderTimeStamps }) => {
  const filteredRows = rows.filter((row) =>
    row["&id"].toLowerCase().includes(searchFilter.toLowerCase())
  );
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredRows.map((row, index) => (
          <ListRow key={index} onClick={() => { setSelectedOrderDetails(row.executionDetails); setSelectedOrderTimeStamps(timestamp.results[index].timestamps) }} >
            <ListRowCell >{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{timestamp.results[index].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
