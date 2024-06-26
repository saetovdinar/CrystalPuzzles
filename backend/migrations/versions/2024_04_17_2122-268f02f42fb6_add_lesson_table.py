"""Add lesson table

Revision ID: 268f02f42fb6
Revises: 6402face495f
Create Date: 2024-04-17 21:22:33.130974

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '268f02f42fb6'
down_revision: Union[str, None] = '6402face495f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Spaces',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=10), nullable=True),
    sa.Column('deleted', sa.Boolean(), nullable=False),
    sa.Column('date_add', sa.DateTime(), nullable=False),
    sa.Column('date_update', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('Checks',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=False),
    sa.Column('deleted', sa.Boolean(), nullable=False),
    sa.Column('date_add', sa.DateTime(), nullable=False),
    sa.Column('date_update', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['student_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id', 'student_id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('Lessons',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('trainer_id', sa.Integer(), nullable=True),
    sa.Column('space_id', sa.Integer(), nullable=True),
    sa.Column('trainer_comments', sa.Text(), nullable=True),
    sa.Column('start', sa.DateTime(), nullable=False),
    sa.Column('deleted', sa.Boolean(), nullable=False),
    sa.Column('date_add', sa.DateTime(), nullable=False),
    sa.Column('date_update', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['space_id'], ['Spaces.id'], ),
    sa.ForeignKeyConstraint(['trainer_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('TrainingChecks',
    sa.Column('check_id', sa.Integer(), nullable=False),
    sa.Column('training_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['check_id'], ['Checks.id'], ),
    sa.ForeignKeyConstraint(['training_id'], ['Trainings.id'], ),
    sa.PrimaryKeyConstraint('check_id', 'training_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('TrainingChecks')
    op.drop_table('Lessons')
    op.drop_table('Checks')
    op.drop_table('Spaces')
    # ### end Alembic commands ###
