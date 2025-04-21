/** @format */

import "./App.css";
// import "./responsive.css";
// import { Bell, UserCircle, ChevronDown } from "lucide-react";
import LeftBar from "./components/Left Bar/leftBar";
import Header from "./components/Header/header";
import { Search, Info, Mic, Upload, Trash } from "lucide-react";

function App() {
	const templates = [
		{ id: "1", label: "Subjective" },
		{ id: "2", label: "objective" },
		{ id: "3", label: "Assessment & plan" },
		{ id: "4", label: "Findings" },
		{ id: "5", label: "Diagnoses" },
		{ id: "6", label: "Treatment" },
		{ id: "7", label: "Recovery" },
		{ id: "8", label: "Objective" },
		{ id: "9", label: "Assessment & plan" },
		{ id: "10", label: "Treatment" },
	];

	const templateDetails = [
		{
			id: 1,
			label: "Subjective",
			description: ["Toothache for few days"],
		},
		{
			id: 2,
			label: "History of Presenting Complaints",
			description: ["Toothache: present for few days"],
		},
		{
			id: 3,
			label: "Extra Oral Examination",
			description: ["Not performed"],
		},
		{
			id: 4,
			label: "Intra Oral Examination",
			description: ["Tenderness around molar", "Swollen gum"],
		},
		{
			id: 5,
			label: "Radiographic Findings",
			description: ["X-ray planned to confirm extent of infection"],
		},
		{
			id: 6,
			label: "Diagnoses",
			description: ["Suspected tooth abscess"],
		},
	];

	return (
		<div className="app-container">
			<Header />
			<div className="main-content">
				<LeftBar />
				<main className="main">
					<div className="main-body">
						<section className="template-section">
							<div className="template-header">
								<h3 className="template-title">Template</h3>
							</div>
							<div className="template-content">
								<div className="template-item">
									<div className="search-container">
										<input
											className="search-input"
											type="text"
											placeholder="Search Templates"
										/>
										<Search className="search" size={20} />
									</div>
								</div>
								<div className="template-list">
									{templates.map((temp) => (
										<div className="template-list-items" key={temp.id}>
											{temp.label}
										</div>
									))}
								</div>
							</div>

							<button className="edit-button">Edit ✎</button>
						</section>

						<section className="template-details">
							<div className="template-details-header">
								<div className="template-details-header-content">
									<h3 className="template-title">Root Canal</h3>
									<Info className="template-details-info" />
								</div>
								<div className="template-details-header-actions">
									<div className="template-details-action-button">
										<Mic size={18} />
										<span>Resume</span>
									</div>
									<Upload />
									<Trash />
								</div>
							</div>
							<div className="template-details-body">
								{templateDetails.map((data) => {
									return (
										<div key={data.id} className="template-detail-item">
											<strong className="template-detail-label">
												{data.label}:
											</strong>
											{data.description.map((desc, index) => (
												<li key={index} className="template-detail-description">
													{desc}
												</li>
											))}
										</div>
									);
								})}
							</div>
						</section>
					</div>

					<div className="template-details-actions">
						<button className="send-referral-button">Send Referal</button>
						<button className="save-note-button">Save Note</button>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
