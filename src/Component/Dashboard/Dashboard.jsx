import React, { useEffect, useState } from 'react';
import DateRange from './DateRange';
import Card from './Card';
import LineChart from './LineChart';
import data from '../../data/data';

const Dashboard = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedData, setSelectedData] = useState(data);
    const [totalImpressions, setTotalImpressions] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);


  
    function formatDate(date) {
      const inputDate = new Date(date);
      const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to the month since January is 0
      const day = String(inputDate.getDate()).padStart(2, '0');
      const year = inputDate.getFullYear();
  
      const formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    }
  
    useEffect(() => {
      if (startDate && endDate) {
        const formattedStart = formatDate(startDate);
        const formattedEnd = formatDate(endDate);
  
        const filteredData = data.filter(
          (item) => {
            const itemDate = formatDate(item.date);
            return itemDate >= formattedStart && itemDate <= formattedEnd;
          }
        );
        setSelectedData(filteredData);
      } else {
        setSelectedData(data);
      }
    }, [startDate, endDate]);
  
  const cardData = [
    {
      id: 1,
      label: 'Total Clicks',
      count: totalImpressions,
    },
    {
      id: 2,
      label: 'Total Impressions',
      count: totalClicks,
    },
  ];
  useEffect(() => {
    calculateTotalImpressions();
     calculateTotalClicks();
  }, [selectedData])
  

    // Function to calculate total impressions
    const calculateTotalImpressions = () => {
        const totalImpressions = selectedData.reduce((total, item) => total + Number(item.impressions), 0);
        const formatedTotalImpressions = totalImpressions.toFixed(2);
        setTotalImpressions(formatedTotalImpressions);
      };
    
      // Function to calculate total clicks
      const calculateTotalClicks = () => {
        const totalClicks = selectedData.reduce((total, item) => total + Number(item.clicks), 0);
        const formatedTotalClicks = totalClicks.toFixed(2);
        setTotalClicks(formatedTotalClicks);
      };

      
      


  return (
    <>
      <DateRange
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <div className="mt-5 flex gap-10">
        {cardData.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <LineChart selectedData={selectedData} />
    </>
  );
};

export default Dashboard;
