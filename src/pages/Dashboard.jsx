import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import ListRow from "../component/list/ListRow";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});


  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${mockData.results.length} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div style={{
            display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
          }}>
            {Object.keys(selectedOrderDetails).length > 0 ? (
              <Card
                cardData={selectedOrderDetails}
                title="Selected Order Details"
              />
            ) : null}
            {Object.keys(selectedOrderTimeStamps).length > 0 ? (
              <Card
                cardData={selectedOrderTimeStamps}
                title="Selected Order Timestamps"
              />
            ) : null}
          </div>
        </div>
        <List rows={mockData.results} currency={currency} searchFilter={searchText} setSelectedOrderDetails={setSelectedOrderDetails} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} />
      </div>
    </div>
  );
};

export default Dashboard;
