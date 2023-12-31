import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { submitAction } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(submitAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto ">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
          <Link to="/favourites">
            <Button className="mt-5" variant="success">
              Aziende Preferite
            </Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
