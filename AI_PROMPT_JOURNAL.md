# VeriFund AI Prompt Journal 📒

This journal tracks the prompts used to architect, develop, and refine VeriFund. 
**Project Goal:** A transparent, escrow-based donation platform using Bitcoin Lightning and AI matching.

---

## Phase 1: Conceptual Architecture & Deep Dive
*Goal: Ensure the AI understands the specific "Deadline-Escrow" logic and the Lightning Network integration.*

### Prompt 1: The "Lead Architect" Deep Dive
> "I am building VeriFund, a donation matching platform for students. I need to implement a 'Deadline-Based Escrow' using the Bitcoin Lightning Network. 
> 
> **System Requirements:**
> 1. Donations are held in a platform-controlled sub-wallet (Escrow) for each case.
> 2. Payout occurs automatically when the target is reached OR when a deadline is hit (even if the goal is only partially met).
> 3. The system must be non-custodial where possible, moving funds to the student's Lightning Address immediately upon settlement.
> 
> Explain the technical flow of how an API like LNBits or Alby would handle 'Invoice Generation' vs 'Payment Settlement' in this specific escrow context. What are the webhook events I need to listen for?"

---

## Phase 2: Backend & Database Schema
*Goal: Use your background in Data Engineering to create a scalable schema.*

### Prompt 2: The "Data Engineer" Schema Design
> "Act as a Senior Data Engineer. Design a PostgreSQL schema for VeriFund using Supabase. I need tables for:
> 1. `users` (Roles: Donor, Beneficiary, Admin).
> 2. `cases` (Must include target_amount, amount_raised, deadline, and lnbits_wallet_id).
> 3. `transactions` (Link to case_id, including payment_hash and status: 'held' or 'released').
> 
> Provide the SQL for the tables, including Row Level Security (RLS) policies so that only Admins can see 'Proof of Need' documents, but everyone can see 'Transaction History'."

---

## Phase 3: The AI Matching Logic (MVP Version)
*Goal: Implement the recommendation engine without heavy ML overhead.*

### Prompt 3: The "Algorithm Designer"
> "I need a Python (FastAPI) function for an AI Recommendation Engine. Since this is an MVP, I want a weighted scoring algorithm instead of a full ML model.
> 
> **Inputs:** > - Donor interests (e.g., ['Education', 'Health'])
> - Case categories and urgency levels (1-5)
> - Case deadline (closer deadlines = higher priority)
> 
> Write a function `get_recommended_cases(donor_id)` that ranks active cases based on interest match (weight 0.6) and urgency/deadline (weight 0.4). Return the results as a JSON list."

---

## Phase 4: Frontend & UX
*Goal: Build a high-trust UI using React.*

### Prompt 4: The "UI/UX Expert"
> "Design a React component using Tailwind CSS for a 'Case Card'. It needs to display:
> 1. A progress bar that changes color (Blue to Red) as the deadline approaches.
> 2. A 'Verified by VeriFund' badge.
> 3. A 'Lightning Fast' donation button that opens a modal with a QR code.
> 4. A status label showing 'Escrow Active: Funds protected until deadline'. 
> 
> Make the design clean, professional, and high-trust. Provide the functional component code."

---

## Phase 5: Automation (The Payout Engine)
*Goal: Handle the automatic deadline payout.*

### Prompt 5: The "DevOps/Backend" Logic
> "I need a Node.js script that acts as a Cron Job. It should:
> 1. Query the Supabase database for all cases where `current_time > deadline` and `status == 'active'`.
> 2. For each found case, trigger an API call to LNBits to transfer the total balance from the Case Sub-Wallet to the Student’s registered Lightning Address.
> 3. Update the case status to 'completed' and log the transaction hash.
> 4. Include error handling in case the student's wallet is unreachable."

---

## Phase 6: Refinement & Scaling
*Goal: Moving from MVP to V1.*

### Prompt 6: The "Security Auditor"
> "Review my VeriFund workflow for potential 'Trust Gaps'. If a student receives Bitcoin directly, how can I programmatically encourage them to upload a 'Proof of Impact' (receipt)? Suggest a feature that uses gamification or reputation scores to ensure students use the funds for their stated purpose."