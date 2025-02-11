// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract voting_SMC is Initializable {
    struct Candidate {
        string name;
        address adrs;
        uint totalVotes;
    }
    uint public counter;
    mapping(uint => Candidate) public _Candidates;
    Candidate[] public Candidates;
    address public admin;

    // serves as the constructor
    function initialize() public initializer {
        counter = 0;
        admin = msg.sender;
    }

    function addCandidate(string memory _name) external {
        require(msg.sender == admin, "ADMIN ONLY!");
        Candidate memory _candidate = Candidate(_name, msg.sender, 0);
        _Candidates[counter] = _candidate;
        Candidates.push(_Candidates[counter]);
        counter++;
    }

    function vote(uint _candidateId) external {
        _Candidates[_candidateId].totalVotes += 1;
        Candidates[_candidateId].totalVotes += 1;
    }

    function getVotes(uint _candidateId) external view returns (uint) {
        return _Candidates[_candidateId].totalVotes;
    }

    function getAllCandidates() external view returns (string[] memory) {
        string[] memory _candidates = new string[](counter);
        for (uint i = 0; i < counter; i++) {
            _candidates[i] = _Candidates[i].name;
        }
        return _candidates;
    }

    function getWinner() external view returns (string memory) {
        string memory winner;
        uint last_candidates_votes = 0;
        for (uint i = 0; i < counter; i++) {
            if (_Candidates[i].totalVotes > last_candidates_votes) {
                last_candidates_votes = _Candidates[i].totalVotes;
                winner = _Candidates[i].name;
            }
        }
        return winner;
    }
}
