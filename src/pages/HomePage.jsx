import React from "react";
import Data from "../components/apiData/Data";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl, Navbar, Row, Table } from "react-bootstrap";
import CustomModel from "../components/customModal/CustomModal";
import UpdateData from "../components/apiData/UpdateData";
import DataForm from "../components/form/StudentDataForm";
import { connect } from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
function HomePage(props) {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(0);
  const handlePageClick = (data) => {
    setPage(data.selected);
    console.log(page);
  };
  console.log("-------------", props);
  return (
    <Data
      endpoint={"http://localhost:3000/student"}
      query={query}
      page={page}
      queryKey={"name"}
    >
      {({ pageCount, handleDelete, fetchData }) => {
        {
          console.log("data");
        }
        if (!props.loading) {
          console.log(" loaded");
          return (
            <>
              <div className={"d-flex justify-content-between"}>
                <CustomModel
                  trigger={<Button variant="primary">Add Student</Button>}
                >
                  <UpdateData
                    // fetchData={fetchData}
                    method={"POST"}
                    endpoint={`http://localhost:3000/student`}
                  >
                    <DataForm />
                  </UpdateData>
                </CustomModel>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </Form>
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  forcePage={page}
                  onPageChange={handlePageClick}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>

              <Row className={"mt-3"}>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Date of Birth</th>
                      <th>Delete</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((student) => (
                      <tr key={student._id}>
                        <td
                          onClick={() =>
                            props.history.push(`/students/${student._id}`)
                          }
                        >
                          {student._id}
                        </td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        <td>{student.email}</td>
                        <td>{student.dateOfBirth}</td>
                        <td>
                          <Button
                            onClick={() => handleDelete(student._id)}
                            variant="danger"
                          >
                            Delete
                          </Button>
                        </td>
                        <td>
                          <CustomModel
                            trigger={<Button variant="primary">Update</Button>}
                          >
                            <UpdateData
                              singleData={student}
                              // fetchData={fetchData}
                              method={"PUT"}
                              endpoint={`http://localhost:3000/student`}
                              param={student._id}
                            >
                              <DataForm />
                            </UpdateData>
                          </CustomModel>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </>
          );
        } else {
          console.log("not yet");
          return <div style={{ marginTop: "20rem" }}>loading</div>;
        }
      }}
    </Data>
  );
}
const mapStateToProps = (state) => state;
export default withRouter(connect(mapStateToProps)(HomePage));