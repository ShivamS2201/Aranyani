// Conatins The base elememts to be displayed on all the Pages. Heading and contents might change
// Conatins navbar and Aran yani Logo.
import React from "react";
import styled from "styled-components";
const Base = ({
  title = "Titles",
  description = "Desc",
  classname = "bg-white text-black p-4 h-100",
  children,
}) => {
  return (
    <Container>
      <div className="Container">
        <div className="jumbotron text-black text-center">
          <div className="row">
            <div className="col-3 border">ARANYANI</div>
            <div className="col-4"></div>
            <div className="col-5 border">
                <div className="row row-cols-2 row-cols-lg-3">
                    <div className="col-2">Services</div>
                    <div className="col-2">Clients</div>
                </div>
            </div>
          </div>
        </div>
        <div className={classname}>{children}</div>
      </div>

      <footer className="footer bg-dark mt-auto py-2">
        <div className="container-fluid bg-blue text-white text-center py-3 ">
          <h4 classsName="d-inline pr-3">Get in touch with us</h4>
          <button className="btn btn-warning btn-sm  d-inline">
            Contact Us
          </button>
          <div className="container d-inline">
            <span className="text-warning d-inline">A AshSavy© Product</span>
          </div>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  .Container {
      transition:all 250ms;
      transition-timing-function: cubic-bezier(1, 0.03, 0, 1.26);

    .jumbotron {
        position:relative;
      background-color: red;
      min-height: 70px;
    }
    .row{
        font-family:'Cantarell';
        align-items: center;
        position:relative;
        --bs-gutter-x: 0;
        .col-3{
            text-align:center;
            font-size:45px;
        }
        .col-5{
            .row{
                min-height: 2.3em;
                justify-content: space-around;
                background-color:green;
                .col-2{
                 background-color:white;
                 border-radius:20px;
                }
                .col-2:hover{
                    transform:scale(1.11);
                    cursor:pointer;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        .row{
        top:12px;
        font-family: 'Cantarell';

            .col-3{
                top:0.4em;
            font-size:18.5px;
        }
    }
    }
  }
`;
export default Base;
