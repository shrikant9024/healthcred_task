import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  LabelList,
  Cell,
  BarChart,
  Legend,
  Bar,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const API_URL = "https://mocki.io/v1/1cba9e6f-24b3-4b13-9939-5663bcabaaff";
//url - https://hcassignment-production.up.railway.app/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#263F81",
    color: theme.palette.common.white,
    padding: "10px",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "10px",
    paddingTop: "22px",
    textAlign: "center",
    borderRadius: "10px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: 2,
  },

  "&:last-child td, &:last-child th": {
    border: 1,
    width: "25px",
  },
}));

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const pieChartData = [
    {
      name: "Utilised",
      value: data.current_limit_utilised,
      percentage: data.current_limit_utilised_percentage,
    },
    {
      name: "Unutilised",
      value: data.current_unutilised_funds,
      percentage: data.current_unutilised_funds_percentage,
    },
  ];

  const claimsDataArray = Object.values(data.claims_data);

  const barChartData = [
    { name: "Disbursals Amount", value: data.disbursals_amount },
    { name: "Repayments Amount", value: data.repayments_amount },
    { name: "Total Repayment Amount", value: data.repayments_amount },
    { name: "Subvention per Claim", value: data.subvention_per_claim },
    {
      name: "To Be Repaid",
      value: data.amount_to_be_repaid_on_upcoming_date,
    },
  ];

  return (
    <div className="h-screen flex flex-col  font-inter">
      <div className="p-4 sm">
        <Banner
          heading={data.hospital_name}
          month={data.repayment_tenure}
          uhid={data.claimbook_uhid}
          repayDate={data.upcoming_repayment_date}
        />
      </div>

      <div className="flex-1 p-4">
        <div className="fle w-full  flex-col md:flex-row justify-between items-center text-center gap-4 md:gap-6 mx-auto ">
          <div className="bg-slate-100 rounded-3xl p-4 md:p-6 w-full flex flex-row justify-around">
            <BarChart
              width={600}
              height={300}
              data={barChartData}
              barSize={30}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 40,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-45}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#263F81 " />
            </BarChart>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1d3470",
                color: "#cbced4",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "16px",
              }}
            >
              <CardContent>
                <Typography variant="h4" className="font-extrabold">
                  Financial Details
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "22px" }}>
                  Disbursals Amount {data.disbursals_amount}
                </Typography>
                <Typography variant="body1">
                  Repayment Amount: {data.repayments_amount}
                </Typography>
                <Typography variant="body1">
                  Total Interest Amount: {data.total_interest_amount}
                </Typography>
                <Typography variant="body1">
                  Subvention Per Claim: {data.subvention_per_claim}
                </Typography>
                <Typography variant="body1">
                  Total Due: {data.total_due}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex bg-slate-100 rounded-2xl flex-col md:flex-row justify-around   items-center text-center  md:gap-6 mx-auto  mt-6">
          <Card
            className=" bg-gray-100 rounded-3xl"
            variant="outlined"
            sx={{
              backgroundColor: "#1d3470",
              color: "#cbced4",
              fontFamily: "Inter, sans-serif",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
              fontWeight: "bold",
              borderRadius: "20px",
              paddingTop: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h4" className="font-bold">
                Amount Overview
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "22px" }}>
                Bill Amount Discounted To Date:{" "}
                {data.bill_amount_discounted_to_date}
              </Typography>
              <Typography variant="body1">
                Amount Repaid To Date: {data.amount_repaid_to_date}
              </Typography>
              <Typography variant="body1">
                Interest Paid on Borrowed Amount To Date:{" "}
                {data.interest_paid_on_borrowed_amt_to_date}
              </Typography>
            </CardContent>
          </Card>

          <div className="bg-slate-100 rounded-3xl  md:p-6 w-1/3 flex flex-col md:flex-row items-center md:items-start">
            <PieChart width={300} height={300}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                <LabelList
                  dataKey="percentage"
                  position="inside"
                  style={{ fill: "white", textAnchor: "middle" }}
                  formatter={(value) => `${value}%`}
                />
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "#9F2E2E " : "#79B972 "}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="ml-0 md:ml-4 md:w-3/4">
              <h3 className="text-lg font-bold">
                Total Limit: {data.total_limit_allocated}
              </h3>
              <div className="mt-24 sm:text-[15px]">
                <div className="text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-red-800 rounded-full inline-block mr-2"></span>
                  <span className="font-semibold">Used Funds:</span>{" "}
                  {data.current_limit_utilised_percentage}%
                </div>
                <div className="text-gray-700 mt-2 flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full inline-block mr-2"></span>
                  <span className="font-semibold">Available Funds:</span>{" "}
                  {data.current_unutilised_funds_percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full mx-auto  ">
          <Card
            variant="outlined"
            sx={{ p: 3, borderRadius: "25px", background: "#d4dae6" }}
          >
            <CardHeader title="Claims Data" className="text-center " />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Amount</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(data.claims_data).map((claim, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{claim.claim_date}</StyledTableCell>
                      <StyledTableCell>{claim.claim_status}</StyledTableCell>
                      <StyledTableCell>{claim.claim_amount}</StyledTableCell>
                      <StyledTableCell>{claim.claim_id}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
