import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

    <h2 className="common-heading">Contact Pages</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1699534729025!5m2!1sen!2sin" width="100%" height="420"  allowFullScreen="" 
    style={{border:"0px"}}
    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



    <div className="container">
      <div className="contact-form">
        <form action="" method="POST">
          <input type="text" 
          placeholder="Username"
          name="username"
           required
           autoComplete="off"
          />

          <input type="email" 
          name="Email"
          placeholder="Email"
          required
          />


          <textarea name="Message" cols="30" rows="10" placeholder="Enter Your Message" required></textarea>


          <input type="submit" name="" value="Submit" />

        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
