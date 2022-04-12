const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectNoteSchema = new Schema(
  {
    note: {
      type: Schema.Types.Decimal128,
      required: false,
    },
    moderator: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      select: false,
    },
  },
  { timestamps: true }
);

const TeamMemberSchema = new Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    photo: {
      type: Schema.Types.ObjectId,
      ref: "Media",
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

const ProjectTeamSchema = new Schema(
  {
    memberCount: {
      type: Number,
      required: false,
    },
    teamQuality: {
      type: String,
      required: false,
    },
    members: [TeamMemberSchema],
  },
  { timestamps: false }
);

const projectSchema = new Schema(
  {
    averageNote: {
      type: Schema.Types.Decimal128,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    goals: {
      type: String,
      required: false,
    },
    shortDescription: {
      type: String,
      required: false,
    },
    longDescription: {
      type: String,
      required: false,
    },
    budget: {
      type: Schema.Types.Decimal128,
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    recipients: {
      type: String,
      required: false,
    },
    interventionAreas: {
      type: String,
      required: false,
    },
    isPartnerNeeded: {
      type: Boolean,
      required: false,
    },
    strategyForFindingPartners: {
      type: String,
      required: false,
    },
    viability: {
      type: String,
      required: false,
    },
    impacts: {
      type: String,
      required: false,
    },
    expectedResults: {
      type: String,
      required: false,
    },
    executionPlaning: {
      type: String,
      required: false,
    },
    actionPlan: {
      type: String,
      required: false,
    },
    team: {
      type: ProjectTeamSchema,
      required: true,
    },
    projectNotes: {
      type: [ProjectNoteSchema],
      select: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      select: false,
      ref: "User",
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
