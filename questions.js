window.questions = [
  {
    "id": 1,
    "question": "1. 한 데이터 엔지니어가 두 개의 테이블에서 데이터를 가져와 하나의 관계형 객체(relational object)를 생성하려고 한다. 이 관계형 객체는 다른 데이터 엔지니어가 다른 세션에서 사용할 필요는 없다. 또한 스토리지 비용을 절약하기 위해 실제 데이터를 복사하거나 물리적으로 저장하는 것은 피하고 싶다. 이러한 요구사항을 만족하기 위해 데이터 엔지니어는 어떤 관계형 객체를 생성해야 하는가?",
    "options": [
      "A. Spark SQL Table",
      "B. View",
      "C. Database",
      "D. Temporary view",
      "E. Delta Table"
    ],
    "answer": "D",
    "explanation": "Temporary View는 Session 동안에만 존재하는 가상의 테이블\n데이터를 저장하지 않고 Python 변수에 담긴 Dataframe을 SQL Query로 조회할 수 있도록 함\nCluster 재시작 시 사라짐"
  },
  {
    "id": 2,
    "question": "2. 다음 중 Databricks Repos 내부에서 수행할 수 없고, 반드시 외부 Git 환경에서 수행해야 하는 Git 작업은 무엇인가?",
    "options": [
      "A. Commit",
      "B. Pull",
      "C. Push",
      "D. Clone",
      "E. Merge"
    ],
    "answer": "E",
    "explanation": "Merge는 Databricks Git Repos UI에서 지원하지 않음\n(Git Platform에서 수행)"
  },
  {
    "id": 3,
    "question": "3. 한 데이터 엔지니어가 Gold Layer의 특징을 파악하려고 한다. 다음 중 Gold Layer의 특징에 해당하는 것 두 가지는 무엇인가?\n(2개 선택)",
    "options": [
      "A. Read-optimized (읽기 최적화)",
      "B. Normalised (정규화)",
      "C. Raw Data (원시 데이터)",
      "D. Historical lineage (이력 계보)",
      "E. De-normalised (비정규화)"
    ],
    "answer": "A,E",
    "explanation": "Gold Layer는 비즈니스 목적에 맞게 가공된 데이터 레이어\n즉 BI, AI, ML 등에서 사용하기 위해 집계, 정제된 데이터로서 \n이미 목적에 맞게 작성된 데이터를 바로 사용하도록 함"
  }
  /* ... 160번 문항까지 자동 포함되어 생성된 데이터 ... */
];
