/*For New general member and exesting members renewal form*/
// "use client";

// import { useState, useEffect } from "react";
// import styles from "../joinseds.module.css";
// import { JoinSeds } from "../joinseds";
// import NewGeneralMemberForm from "./components/newgeneralmemberform";
// import ExistingMemberForm from "./components/existinggeneralmemberform";

// interface FormBodyProps {
//   memberType: string;
// }

// export default function GeneralForm() {
//   const [membership_type, set_membership_type] = useState("");

//   return (
//     <div className={`container ${styles.join_seds}`}>
//       <section className={styles.application_form}>
//         <JoinSeds membershipType="general" />
//         <div data-bs-theme="dark" className={styles.form_outline}>
//           <div>
//             <p>
//               Please fill out the following form to become a General Member of
//               SEDS Pulchowk and embark on an exciting journey into the cosmos.
//             </p>
//             <br />
//             <p>
//               Being a member of SEDS Pulchowk comes with numerous benefits,
//               including:
//             </p>
//             <ol>
//               <li>
//                 <strong>Priority Access:</strong> Students will receive first
//                 priority for all workshops, seminars, and events organized by
//                 SEDS Pulchowk.
//               </li>
//               <li>
//                 <strong>Networking Opportunities:</strong> As a member, you will
//                 have the opportunity to connect with like-minded individuals,
//                 fellow space enthusiasts, and professionals in the aerospace and
//                 space industries.
//               </li>
//               <li>
//                 <strong>Project Involvement:</strong> Get the chance to work on
//                 exciting space-related projects within SEDS Pulchowk.
//               </li>
//             </ol>
//             <br />
//             <h4>Membership Fee</h4>
//             <div style={{ marginLeft: "5px" }}>
//               <em>For New Members: Nrs. 150/-</em>
//               <br />
//               <em>For Existing Members: Nrs. 45/-</em>
//             </div>
//             <br />
//             <p>
//               <strong>Note:</strong> This fee includes ID cards and processing
//               fee too. It will help SEDS-Pulchowk to grow. We will also provide
//               you with certification at end of your membership tenure (1 Year).
//             </p>
//           </div>
//           <br />
//           <form>
//             <p>
//               <strong>Are you new or existing member?</strong>
//             </p>{" "}
//             <select
//               className={`form-select ${styles.select_dropdown}`}
//               name="Member-Type"
//               onChange={(e) => set_membership_type(e.target.value)}
//               aria-label="Membership type select"
//             >
//               <option value="net">Membership Type</option>
//               <option id="new-member" value="new-member">
//                 New Member
//               </option>
//               <option id="existing-member" value="existing-member">
//                 Existing Member
//               </option>
//             </select>
//             <hr />
//           </form>
//           <FormBody memberType={membership_type} />
//         </div>
//       </section>
//     </div>
//   );
// }

// function FormBody({ memberType }: FormBodyProps) {
//   const [formMain, setFormMain] = useState(<></>);

//   useEffect(() => {
//     if (memberType == "new-member") {
//       setFormMain(<NewGeneralMemberForm />);
//     } else if (memberType == "existing-member") {
//       setFormMain(<ExistingMemberForm />);
//     } else {
//       setFormMain(<small>Select membership type to open a form</small>);
//     }
//   }, [memberType]);

//   return formMain;
// }


// function FormBody({ memberType }: FormBodyProps) {
//   const [formMain, setFormMain] = useState(<></>);

//   useEffect(() => {
//     if (memberType == "new-member") {
//       setFormMain(<NewGeneralMemberForm />);
//     } else if (memberType == "existing-member") {
//       setFormMain(<ExistingMemberForm />);
//     } else {
//       setFormMain(<small>Select membership type to open a form</small>);
//     }
//   }, [memberType]);

//   return formMain;
// }




/*Only for New general members */
"use client";

import styles from "../joinseds.module.css";
import { JoinSeds } from "../joinseds";
import NewGeneralMemberForm from "./components/newgeneralmemberform";

interface FormBodyProps {
  memberType: string;
}

export default function GeneralForm() {

  return (
    <div className={`container ${styles.join_seds}`}>
      <section className={styles.application_form}>
        <JoinSeds membershipType="general" />
        <div data-bs-theme="dark" className={styles.form_outline}>
          <div>
            <p>
              Please fill out the following form to become a General Member of
              SEDS Pulchowk and embark on an exciting journey into the cosmos.
            </p>
            <br />
            <p>
              Being a member of SEDS Pulchowk comes with numerous benefits,
              including:
            </p>
            <ol>
              <li>
                <strong>Priority Access:</strong> Students will receive first
                priority for all workshops, seminars, and events organized by
                SEDS Pulchowk.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> As a member, you will
                have the opportunity to connect with like-minded individuals,
                fellow space enthusiasts, and professionals in the aerospace and
                space industries.
              </li>
              <li>
                <strong>Project Involvement:</strong> Get the chance to work on
                exciting space-related projects within SEDS Pulchowk.
              </li>
            </ol>
            <p><u><strong>Membership Fee: 150/-</strong></u></p>
            <p>
              <strong>Note:</strong> This fee includes ID cards and processing
              fee too. It will help SEDS-Pulchowk to grow. We will also provide
              you with certification at end of your membership tenure (4 Years).
            </p>
          </div>
          <hr />
          <NewGeneralMemberForm />
        </div>
      </section>
    </div>
  );
}