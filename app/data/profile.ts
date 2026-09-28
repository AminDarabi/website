// All site content lives here, so updating the website after a resume change
// only means editing this file.

export interface Link {
  label: string
  href: string
}

export interface TimelineEntry {
  title: string
  organization: string
  location: string
  start: string
  end: string
  details: string[]
  link?: string
}

export interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  href: string
  tags: string[]
  status?: string
  summary?: string
}

export interface Project {
  title: string
  kind: string
  status: string
  summary: string
  href?: string
}

export const profile = {
  name: 'Amin Darabi',
  headline: 'ML Researcher & Engineer',
  tagline:
    'ML researcher and engineer specializing in efficient large-scale training, GPU kernel development, and low-precision training.',
  location: 'Montreal, Canada',
  email: 'amin@darabi.one',
  github: 'https://github.com/AminDarabi',
  linkedin: 'https://www.linkedin.com/in/amindarabi/',
  affiliations: [
    { label: 'Mila – Quebec AI Institute', href: 'https://mila.quebec' },
    { label: 'Université de Montréal', href: 'https://www.umontreal.ca' },
    { label: 'Huawei Canada', href: 'https://www.huawei.com/ca/' },
  ] satisfies Link[],
  interests: [
    'Low-precision training (FP8 / FP4)',
    'Efficient large-scale training',
    'GPU kernels (Triton / CUDA)',
    'Distributed multi-node training',
    'Foundation models for time series & neuroimaging',
    'Test-time adaptation & training',
    'Long-horizon agents',
  ],
}

export const bio: string[] = [
  `I'm an ML researcher and engineer working on making large-model training cheaper, faster, and more
   stable — through low-precision (FP8 / FP4) arithmetic, custom GPU kernels, and efficient distributed
   training on multi-node, multi-GPU clusters.`,
  `At Huawei Canada, as an Efficient AI Researcher, I've worked on low-bit training, model pruning, and
   test-time adaptation, and I'm currently working on test-time training and long-horizon agents.
   At Mila – Quebec AI Institute and Université de Montréal, I do research in Professor
   Irina Rish's CERC-AAI Lab on foundation models for time-series and neuroimaging data.`,
  `My path started with hardware. I wrote my first C++ program in middle school, and a love for
   mathematics pulled me toward algorithms and competitive programming (ACM-ICPC and IEEEXtreme).
   While studying Computer Engineering at Isfahan University of Technology, I realized that what I
   enjoy most is not designing hardware but understanding it deeply — and then using it efficiently
   with the right algorithms.`,
  `That led me to an M.Sc. in Algorithms and Computation Theory at Shahid Beheshti University, where my
   thesis brought algorithms to bioinformatics (AFITbin, published in BMC Bioinformatics), and then to
   an M.Sc. in Artificial Intelligence at Université de Montréal. Today the same instinct — hardware
   awareness plus good algorithms — drives my work on efficient deep learning.`,
]

export const experience: TimelineEntry[] = [
  {
    title: 'Efficient AI Researcher (Intern)',
    organization: 'Huawei Canada',
    location: 'Montreal, Canada',
    start: 'Dec 2024',
    end: 'Present',
    details: [
      'Low-bit training (FP8 / FP4), model pruning, and test-time adaptation.',
      'Currently working on test-time training and long-horizon agents.',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    organization: 'Mila – Quebec AI Institute',
    location: 'Montreal, Canada',
    start: 'Sep 2023',
    end: 'Present',
    details: [
      'Research on time-series and neuroimaging foundation models at the CERC-AAI Lab, supervised by Professor Irina Rish.',
    ],
    link: 'https://www.irina-rish.com',
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'M.Sc. Computer Science (Artificial Intelligence)',
    organization: 'Université de Montréal',
    location: 'Montreal, Canada',
    start: '2023',
    end: '2026',
    details: ['Supervised by Professor Irina Rish.'],
  },
  {
    title: 'M.Sc. Computer Science (Algorithms and Computation Theory)',
    organization: 'Shahid Beheshti University',
    location: 'Tehran, Iran',
    start: '2019',
    end: '2022',
    details: ['Supervised by Professor Changiz Eslahchi and Dr. Rosa Aghdam.'],
  },
  {
    title: 'B.Sc. Computer Engineering (Hardware Engineering)',
    organization: 'Isfahan University of Technology',
    location: 'Isfahan, Iran',
    start: '2014',
    end: '2019',
    details: ['Supervised by Dr. Zeinab Zali.'],
  },
]

export const publications: Publication[] = [
  {
    title: 'Stable FP4 Training via Transposition-Invariant Block Quantization',
    authors: [
      'Mehdi Rahimifar', 'Amin Darabi', 'Mehran Taghian Jazi', 'Xing Huang', 'Yao Wang',
      'Zhijun Tu', 'Yufei Cui', 'Yunke Peng', 'Hongliang Li',
    ],
    venue: 'arXiv preprint',
    year: 2026,
    href: 'https://arxiv.org/abs/2607.24953',
    tags: ['FP4', 'Low-precision training', 'LLMs'],
    status: 'Under review',
    summary:
      'Identifies tensor-transposition-induced scale inconsistency as a key cause of FP4 training instability and proposes a 2D block quantization scheme with transposition-invariant scaling. Achieves stable end-to-end FP4 training within 1.3% of BF16, validated on LLMs up to 7B parameters and a 30B MoE model.',
  },
  {
    title: 'General-Purpose Brain Foundation Models for Time-Series Neuroimaging Data',
    authors: [
      'Mohammad Javad Darvishi Bayazi', 'Hena Ghonia', 'Roland Riachi', 'Bruno Aristimunha',
      'Arian Khorasani', 'Md Rifat Arefin', 'Amin Darabi', 'Guillaume Dumas', 'Irina Rish',
    ],
    venue: 'NeurIPS Workshop on Time Series in the Age of Large Models',
    year: 2024,
    href: 'https://openreview.net/forum?id=HwDQH0r37I',
    tags: ['Foundation models', 'Neuroimaging', 'Time series'],
  },
  {
    title:
      'AFITbin: a metagenomic contig binning method using aggregate l-mer frequency based on initial and terminal nucleotides',
    authors: ['Amin Darabi', 'Sayeh Sobhani', 'Rosa Aghdam', 'Changiz Eslahchi'],
    venue: 'BMC Bioinformatics 25, 241',
    year: 2024,
    href: 'https://doi.org/10.1186/s12859-024-05859-7',
    tags: ['Bioinformatics', 'Metagenomics'],
  },
]

export const projects: Project[] = [
  {
    title: 'Boundary-Aware Neighborhood Shrinkage for Test-Time Adaptation',
    kind: 'Research paper · Huawei',
    status: 'Under review',
    summary:
      'Proposes GTA, a test-time adaptation method that pairs predictive entropy with a feature-space margin radius and a neighborhood-shrinkage operator to identify and repair unreliable pseudo-labels, improving sample selection and adaptation across multiple datasets and architectures.',
  },
  {
    title: 'FP8 Training Pipeline for Transformers',
    kind: 'Research project · Huawei',
    status: '2025',
    summary:
      'Designed and implemented an end-to-end FP8 mixed-precision training pipeline for large transformers, with custom kernels for Flash Attention, matrix multiplication, and quantization scaling. Achieves state-of-the-art activation-memory reduction and throughput gains among low-bit approaches while matching BF16 training stability; validated by pre-training models up to 7B parameters on multi-node, multi-GPU clusters.',
  },
  {
    title: 'Self-Supervised ResNet',
    kind: 'Course project · UdeM',
    status: '2024',
    summary:
      'Implemented SimCLR from scratch to train a ResNet on various datasets and demonstrated its advantages over training the model directly on the datasets.',
  },
  {
    title: 'AFITbin: Metagenome Binning Using a Novel Feature Vector',
    kind: "Master's thesis · SBU",
    status: '2022',
    summary:
      'Introduced an effective new method to extract features from genetic sequences, and built a new contig-binning method on top of this feature vector.',
    href: 'https://doi.org/10.1186/s12859-024-05859-7',
  },
]

export const skills: { group: string, items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C / C++', 'Java', 'Bash'] },
  { group: 'Machine Learning', items: ['PyTorch', 'scikit-learn', 'NumPy', 'pandas'] },
  { group: 'Parallel & GPU Computing', items: ['CUDA', 'Triton', 'OpenMP', 'MPI', 'pthreads'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { group: 'Tooling', items: ['Git', 'CI/CD', 'UNIX'] },
  { group: 'Hardware', items: ['Verilog', 'PCB design', 'ASIC / VLSI'] },
  { group: 'Foundations', items: ['Algorithms & data structures'] },
]

export const courses: { name: string, grade: string }[] = [
  { name: 'Probabilistic Graphical Models', grade: 'A+' },
  { name: 'Geometric Modeling and Shape Analysis', grade: 'A+' },
  { name: 'Fundamentals of Machine Learning', grade: 'A+' },
  { name: 'Parallel Algorithms', grade: 'A+' },
  { name: 'Artificial Intelligence', grade: 'A+' },
  { name: 'Engineering Mathematics', grade: 'A+' },
  { name: 'Representation Learning', grade: 'A' },
  { name: 'Statistical Machine Learning', grade: 'A' },
  { name: 'Advanced Algorithms', grade: 'A' },
]

export const honours: { title: string, detail: string }[] = [
  {
    title: 'ACM-ICPC Asia Regional, Tehran site',
    detail: 'Ranked 5th (2015), 4th (2016), and 6th (2017).',
  },
  {
    title: 'IEEEXtreme Programming Competition',
    detail: 'Ranked 104th (IEEEXtreme 10.0, 2016) and 66th (IEEEXtreme 11.0, 2017) globally.',
  },
]
