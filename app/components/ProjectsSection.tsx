'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="pt-20 pb-0 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl mb-16 text-center md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
					My Projects
				</motion.h2>

				<div className="space-y-16">
					{/* SiteBotic - AI-Powered Chatbot Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">SiteBotic - AI-Powered Chatbot Platform</h3>
										<p className="text-sm text-purple-400 mb-2 italic">Founder & Technical Lead | SaaS Platform</p>
										<p className="text-gray-400">
											A comprehensive SaaS platform enabling businesses to instantly create, customize, and embed intelligent chatbots trained on their website content. Built the complete backend infrastructure using modern web technologies, implementing AI-powered knowledge retrieval and seamless one-click deployment.
										</p>
										<div className="flex gap-4 mt-3">
											<a href="https://sitebotic.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
												Website →
											</a>
											<a href="https://app.sitebotic.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
												Dashboard →
											</a>
										</div>
									</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Core Features</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Website content crawling & AI training</li>
													<li>• Customizable chatbot appearance & behavior</li>
													<li>• One-click embed functionality</li>
													<li>• Analytics dashboard & insights</li>
													<li>• 24/7 automated customer support</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Technical Stack</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• React SPA for modern web development</li>
													<li>• TypeScript for type-safe development</li>
													<li>• TanStack Query for data fetching & caching</li>
													<li>• Zustand for state management</li>
													<li>• shadcn/ui for component library</li>
												</ul>
											</div>
										</div>									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Built end-to-end SaaS platform from concept to production</li>
											<li>• Implemented AI-powered content processing and chatbot training</li>
											<li>• Created seamless no-code deployment experience</li>
											<li>• Developed comprehensive analytics and user insights system</li>
											<li>• Established scalable cloud infrastructure for growing user base</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Platform Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* User Websites */}
											<g>
												<rect x="20" y="10" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="30" textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
													User Websites (Content Sources)
												</text>
											</g>

											{/* SiteBotic Platform */}
											<g>
												<rect x="60" y="55" width="280" height="25" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="72" textAnchor="middle" className="fill-gray-400 text-[11px]">
													SiteBotic SaaS Platform
												</text>
												<line x1="200" y1="40" x2="200" y2="55" className="stroke-gray-600" strokeWidth="1" />
												<line x1="200" y1="80" x2="200" y2="95" className="stroke-gray-600" strokeWidth="1" />
											</g>

											{/* AI Processing Layer */}
											<g>
												<rect x="60" y="95" width="280" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="115" textAnchor="middle" className="fill-gray-400 text-[12px]">
													AI Content Processing & Training
												</text>
												<line x1="120" y1="125" x2="120" y2="145" className="stroke-gray-600" strokeWidth="1" />
												<line x1="280" y1="125" x2="280" y2="145" className="stroke-gray-600" strokeWidth="1" />
											</g>

											{/* Core Services */}
											<g>
												<rect x="20" y="145" width="160" height="35" rx="4" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="100" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
													Chatbot Engine
												</text>
												<text x="100" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
													(AI Responses)
												</text>

												<rect x="220" y="145" width="160" height="35" rx="4" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1" />
												<text x="300" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
													Analytics Dashboard
												</text>
												<text x="300" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
													(User Insights)
												</text>
											</g>

											{/* Deployment Layer */}
											<g>
												<rect x="120" y="195" width="160" height="35" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
												<text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[11px]">
													One-Click Embed
												</text>
												<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px]">
													(Live Websites)
												</text>
												<line x1="100" y1="180" x2="140" y2="195" className="stroke-gray-600" strokeWidth="1" />
												<line x1="300" y1="180" x2="260" y2="195" className="stroke-gray-600" strokeWidth="1" />
											</g>

											{/* User Interaction */}
											<g>
												<rect x="120" y="245" width="160" height="35" rx="4" className="fill-red-500/20 stroke-red-500" strokeWidth="1" />
												<text x="200" y="260" textAnchor="middle" className="fill-gray-400 text-[11px]">
													End Users
												</text>
												<text x="200" y="272" textAnchor="middle" className="fill-gray-400 text-[9px]">
													(24/7 Chat Support)
												</text>
												<line x1="200" y1="230" x2="200" y2="245" className="stroke-gray-600" strokeWidth="1" />
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="277" x2="200" y2="295" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* University Projects Section */}
					<div className="space-y-8">
						{/* Customer 360 Risk Scoring System */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Customer 360 Risk Scoring System</h3>
											<p className="text-sm text-purple-400 mb-2 italic">Data Engineering Project | University Assignment</p>
											<p className="text-gray-400">
												A comprehensive data engineering solution for building a Customer 360 view and implementing risk scoring analytics. Features ETL pipelines using SeaTunnel, distributed processing with Apache Spark, workflow orchestration via Apache Airflow, and interactive dashboards with Metabase for business intelligence.
											</p>
											<a href="https://github.com/23210287thongtruong/customer360-risk" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors">
												View on GitHub →
											</a>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Data Pipeline Technologies</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Apache SeaTunnel for ETL operations</li>
													<li>• Apache Spark for distributed processing</li>
													<li>• Apache Airflow for workflow orchestration</li>
													<li>• PostgreSQL for data warehousing</li>
													<li>• Python for data transformations</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Analytics & Visualization</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Metabase for business intelligence dashboards</li>
													<li>• Risk scoring algorithms implementation</li>
													<li>• Customer 360 view aggregation</li>
													<li>• Real-time data processing pipelines</li>
													<li>• Interactive data exploration tools</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Key Technical Achievements</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Designed and implemented scalable ETL pipelines handling large datasets</li>
												<li>• Built distributed data processing workflows with Apache Spark</li>
												<li>• Created automated data quality monitoring and validation systems</li>
												<li>• Developed comprehensive risk scoring models for customer analytics</li>
												<li>• Integrated multiple data sources into unified Customer 360 views</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Engineering Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* Data Sources Layer */}
												<g>
													<rect x="20" y="10" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="30" textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
														Multiple Data Sources (CRM, Transactions, Behavior)
													</text>
												</g>

												{/* ETL Layer */}
												<g>
													<rect x="60" y="55" width="280" height="25" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="72" textAnchor="middle" className="fill-gray-400 text-[11px]">
														SeaTunnel ETL Pipeline (Extract & Transform)
													</text>
													<line x1="200" y1="40" x2="200" y2="55" className="stroke-gray-600" strokeWidth="1" />
													<line x1="200" y1="80" x2="200" y2="95" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Processing Layer */}
												<g>
													<rect x="20" y="95" width="160" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="100" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Apache Spark
													</text>
													<text x="100" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Distributed Processing)
													</text>

													<rect x="220" y="95" width="160" height="35" rx="4" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
													<text x="300" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Apache Airflow
													</text>
													<text x="300" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Workflow Orchestration)
													</text>
												</g>

												{/* Storage Layer */}
												<g>
													<rect x="120" y="145" width="160" height="35" rx="4" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1" />
													<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
														PostgreSQL Data Warehouse
													</text>
													<text x="200" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Customer 360 & Risk Data)
													</text>
													<line x1="100" y1="130" x2="140" y2="145" className="stroke-gray-600" strokeWidth="1" />
													<line x1="300" y1="130" x2="260" y2="145" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Analytics Layer */}
												<g>
													<rect x="120" y="195" width="160" height="35" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
													<text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Metabase BI Dashboard
													</text>
													<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Risk Scoring & Analytics)
													</text>
													<line x1="200" y1="180" x2="200" y2="195" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="227" x2="200" y2="245" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Book Recommendation System */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Book Recommendation System</h3>
											<p className="text-sm text-purple-400 mb-2 italic">Full-Stack Web Application | University Assignment</p>
											<p className="text-gray-400">
												A comprehensive book recommendation platform implementing multiple machine learning algorithms for personalized book suggestions. Features collaborative filtering using Singular Value Decomposition (SVD), content-based filtering with TF-IDF vectorization, and a hybrid approach combining both methods for improved accuracy.
											</p>
											<a href="https://github.com/23210287thongtruong/recommendation-system" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors">
												View on GitHub →
											</a>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend (Python)</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• FastAPI for RESTful API development</li>
													<li>• Scikit-learn for ML algorithms implementation</li>
													<li>• Pandas & NumPy for data processing</li>
													<li>• SVD for collaborative filtering</li>
													<li>• TF-IDF for content-based recommendations</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend (TypeScript)</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• React with TypeScript for type safety</li>
													<li>• TanStack Router for client-side routing</li>
													<li>• Vite for fast development and building</li>
													<li>• Tailwind CSS for responsive styling</li>
													<li>• Axios for API communication</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Multiple recommendation algorithms (collaborative, content-based, hybrid)</li>
												<li>• User rating system and preference tracking</li>
												<li>• Book search and filtering capabilities</li>
												<li>• Responsive web interface with modern UI/UX</li>
												<li>• RESTful API with comprehensive documentation</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* Frontend Layer */}
												<g>
													<rect x="20" y="10" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="30" textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
														React Frontend (TypeScript + Vite)
													</text>
												</g>

												{/* API Layer */}
												<g>
													<rect x="60" y="55" width="280" height="25" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="72" textAnchor="middle" className="fill-gray-400 text-[11px]">
														FastAPI Backend (RESTful API)
													</text>
													<line x1="200" y1="40" x2="200" y2="55" className="stroke-gray-600" strokeWidth="1" />
													<line x1="200" y1="80" x2="200" y2="95" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* ML Algorithms Layer */}
												<g>
													<rect x="20" y="95" width="160" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="100" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Collaborative Filtering
													</text>
													<text x="100" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(SVD Algorithm)
													</text>

													<rect x="220" y="95" width="160" height="35" rx="4" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
													<text x="300" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Content-Based Filtering
													</text>
													<text x="300" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(TF-IDF Vectorization)
													</text>
												</g>

												{/* Data Processing Layer */}
												<g>
													<rect x="120" y="145" width="160" height="35" rx="4" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1" />
													<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Hybrid Recommendation Engine
													</text>
													<text x="200" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Combined Algorithms)
													</text>
													<line x1="100" y1="130" x2="140" y2="145" className="stroke-gray-600" strokeWidth="1" />
													<line x1="300" y1="130" x2="260" y2="145" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Database Layer */}
												<g>
													<rect x="120" y="195" width="160" height="35" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
													<text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Book Dataset & User Ratings
													</text>
													<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(CSV/Structured Data)
													</text>
													<line x1="200" y1="180" x2="200" y2="195" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="227" x2="200" y2="245" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Pet Clinic Management System */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Pet Clinic Management System</h3>
											<p className="text-sm text-purple-400 mb-2 italic">Desktop Application | University Assignment</p>
											<p className="text-gray-400">
												A comprehensive veterinary clinic management system built with Java Swing, implementing complete CRUD operations for managing pets, owners, appointments, and medical records. Features a clean GUI interface with JDBC database connectivity and follows the DAO (Data Access Object) pattern for maintainable code architecture.
											</p>
											<a href="https://github.com/23210287thongtruong/pet-clinic-management-system" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors">
												View on GitHub →
											</a>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Core Technologies</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Java Swing for desktop GUI development</li>
													<li>• JDBC for database connectivity</li>
													<li>• MySQL database for data persistence</li>
													<li>• DAO pattern for data access layer</li>
													<li>• Object-Oriented Programming principles</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Application Features</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Pet and owner information management</li>
													<li>• Appointment scheduling system</li>
													<li>• Medical records and treatment history</li>
													<li>• Search and filter functionality</li>
													<li>• Data validation and error handling</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Technical Implementation</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Implemented DAO pattern for clean separation of concerns</li>
												<li>• Built responsive Swing GUI with event-driven programming</li>
												<li>• Established JDBC connections with prepared statements for security</li>
												<li>• Created modular architecture with reusable components</li>
												<li>• Applied proper error handling and user feedback mechanisms</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Application Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* GUI Layer */}
												<g>
													<rect x="20" y="10" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="30" textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
														Java Swing GUI (Desktop Interface)
													</text>
												</g>

												{/* Business Logic Layer */}
												<g>
													<rect x="60" y="55" width="280" height="25" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="72" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Business Logic Layer (Java Classes)
													</text>
													<line x1="200" y1="40" x2="200" y2="55" className="stroke-gray-600" strokeWidth="1" />
													<line x1="200" y1="80" x2="200" y2="95" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* DAO Layer */}
												<g>
													<rect x="20" y="95" width="160" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="100" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Pet DAO
													</text>
													<text x="100" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(CRUD Operations)
													</text>

													<rect x="220" y="95" width="160" height="35" rx="4" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
													<text x="300" y="110" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Owner DAO
													</text>
													<text x="300" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(CRUD Operations)
													</text>
												</g>

												{/* Additional DAOs */}
												<g>
													<rect x="20" y="145" width="160" height="35" rx="4" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1" />
													<text x="100" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Appointment DAO
													</text>
													<text x="100" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Scheduling)
													</text>

													<rect x="220" y="145" width="160" height="35" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
													<text x="300" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Medical Record DAO
													</text>
													<text x="300" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Treatment History)
													</text>
												</g>

												{/* Database Layer */}
												<g>
													<rect x="120" y="195" width="160" height="35" rx="4" className="fill-red-500/20 stroke-red-500" strokeWidth="1" />
													<text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[11px]">
														MySQL Database
													</text>
													<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(JDBC Connection)
													</text>
													<line x1="100" y1="180" x2="140" y2="195" className="stroke-gray-600" strokeWidth="1" />
													<line x1="300" y1="180" x2="260" y2="195" className="stroke-gray-600" strokeWidth="1" />
													<line x1="200" y1="130" x2="200" y2="145" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="227" x2="200" y2="245" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* BGU118 Price Tracker */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Real-Time Price Tracker (BGU118)</h3>
											<p className="text-sm text-purple-400 mb-2 italic">Full-Stack Web Application | University Assignment</p>
											<p className="text-gray-400">
												A comprehensive financial data visualization platform tracking real-time prices for Bitcoin, gold, and USD-VND exchange rates. Features external API integration, interactive charts with date range filtering, and dual currency display (USD/VND). Built with modern web technologies and deployed with containerization.
											</p>
											<a href="https://github.com/23210287thongtruong/bgu118" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors">
												View on GitHub →
											</a>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend (Python)</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• FastAPI for high-performance API development</li>
													<li>• SQLModel with SQLite for data persistence</li>
													<li>• External API integrations (GoldAPI, CoinMarketCap)</li>
													<li>• Asynchronous HTTP requests with httpx</li>
													<li>• Automated data fetching and storage</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend (TypeScript)</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• React with TypeScript for robust development</li>
													<li>• TanStack Query for efficient data fetching</li>
													<li>• Chart.js for interactive data visualization</li>
													<li>• React DatePicker for date range selection</li>
													<li>• Responsive design with Tailwind CSS</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Real-time price tracking for Bitcoin, Gold, and USD-VND rates</li>
												<li>• Interactive line charts with customizable date ranges</li>
												<li>• Dual currency display with automatic VND conversion</li>
												<li>• Automated data refresh with rate limiting</li>
												<li>• Modern responsive UI with loading states and error handling</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* Frontend Layer */}
												<g>
													<rect x="20" y="10" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="30" textAnchor="middle" className="fill-gray-400 text-[12px] font-semibold">
														React Frontend (Charts & UI)
													</text>
												</g>

												{/* API Layer */}
												<g>
													<rect x="60" y="55" width="280" height="25" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="72" textAnchor="middle" className="fill-gray-400 text-[11px]">
														FastAPI Backend (Data API)
													</text>
													<line x1="200" y1="40" x2="200" y2="55" className="stroke-gray-600" strokeWidth="1" />
													<line x1="200" y1="80" x2="200" y2="95" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* External APIs */}
												<g>
													<rect x="20" y="95" width="120" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="80" y="110" textAnchor="middle" className="fill-gray-400 text-[10px]">
														GoldAPI.io
													</text>
													<text x="80" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Gold Prices)
													</text>

													<rect x="160" y="95" width="120" height="35" rx="4" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
													<text x="220" y="110" textAnchor="middle" className="fill-gray-400 text-[10px]">
														CoinMarketCap
													</text>
													<text x="220" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Bitcoin Prices)
													</text>

													<rect x="300" y="95" width="80" height="35" rx="4" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1" />
													<text x="340" y="110" textAnchor="middle" className="fill-gray-400 text-[10px]">
														Currency
													</text>
													<text x="340" y="122" textAnchor="middle" className="fill-gray-400 text-[9px]">
														API
													</text>
												</g>

												{/* Data Processing */}
												<g>
													<rect x="120" y="145" width="160" height="35" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
													<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[11px]">
														Data Processing & Storage
													</text>
													<text x="200" y="172" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(SQLite + VND Conversion)
													</text>
													<line x1="80" y1="130" x2="120" y2="145" className="stroke-gray-600" strokeWidth="1" />
													<line x1="220" y1="130" x2="180" y2="145" className="stroke-gray-600" strokeWidth="1" />
													<line x1="340" y1="130" x2="280" y2="145" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Database Layer */}
												<g>
													<rect x="120" y="195" width="160" height="35" rx="4" className="fill-red-500/20 stroke-red-500" strokeWidth="1" />
													<text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[11px]">
														SQLite Database
													</text>
													<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px]">
														(Historical Price Data)
													</text>
													<line x1="200" y1="180" x2="200" y2="195" className="stroke-gray-600" strokeWidth="1" />
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="227" x2="200" y2="245" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
